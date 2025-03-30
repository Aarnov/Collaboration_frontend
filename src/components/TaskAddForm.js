import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import axios from "axios";

const AddTaskForm = ({ projectId, onAddTask, onClose }) => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [teamMembers, setTeamMembers] = useState([]); // Store project members

    // Fetch team members for assignment
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found, redirecting to login...");
                    return;
                }

                const response = await axios.get(
                    `http://localhost:5000/projects/${projectId}/members`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                console.log("Fetched Team Members:", response.data); // Debugging
                setTeamMembers(response.data);
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        })();
    }, [projectId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found, user is not authenticated");
                return;
            }

            const taskData = {
                title: taskName, 
                description,  // Added description field
                assigned_to: assignedTo, 
                due_date: dueDate 
            };

            console.log("Sending Task Data:", taskData); // Debugging

            const response = await axios.post(
                `http://localhost:5000/projects/${projectId}/add-task`,
                taskData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 201) { 
                const newTask = response.data; 
                onAddTask(newTask);
                setTaskName("");
                setDescription("");
                setAssignedTo("");
                setDueDate("");
                alert("Task Created Successfully");
                onClose();
            }
        } catch (error) {
            console.error("Error adding task:", error.response?.data || error.message);
        }
    };

    return (
        <FormContainer>
            <h2><FaTasks style={{ color: "orange" }} /> Add New Task</h2>

            <FormGroup>
                <FormLabel>Task Name <span style={{ color: "red" }}>*</span></FormLabel>
                <FormInput 
                    type="text" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                    placeholder="Enter Task Name"
                    required
                />
            </FormGroup>

            <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormTextarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Task Description"
                />
            </FormGroup>

            <FormGroup>
    <FormLabel>Assigned To</FormLabel>
    <FormSelect
        value={assignedTo}
        onChange={(e) => {
            const selectedName = e.target.value; // Get the selected name
            const selectedMember = teamMembers.find(
                (member) => member.name === selectedName // Find member by name
            );
            console.log(selectedMember);
            setAssignedTo(selectedMember ? selectedMember.user_id : ""); // Store ID
        }}
    >
        <option value="">Select Member</option>
        {teamMembers.map((member) => (
            <option key={member.user_id} value={member.name}>
                {member.name}
            </option>
        ))}
    </FormSelect>
</FormGroup>

            <FormGroup>
                <FormLabel>Due Date</FormLabel>
                <FormInput 
                    type="date" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                />
            </FormGroup>

            <FormButtonContainer>
                <FormButton type="submit" onClick={handleSubmit}>Add Task</FormButton>
                <FormButton 
                    type="button" 
                    onClick={onClose} 
                    style={{ background: "red" }}
                >
                    Close Form
                </FormButton>
            </FormButtonContainer>
        </FormContainer>
    );
};

export default AddTaskForm;

const FormContainer = styled.div`
    background: #1A1A1A;
    padding: 30px;
    border-radius: 10px;
    width: 350px;
    text-align: left;
    color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 10px rgba(255, 165, 0, 0.5);
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    font-size: 16px;
    color: #ffcc00;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
`;

const FormTextarea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
`;

const FormSelect = styled.select`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
`;

const FormButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FormButton = styled.button`
    background: orange;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    width: 48%;
    transition: background 0.3s;
    
    &:hover {
        background: #ffcc00;
    }
`;