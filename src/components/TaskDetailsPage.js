import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const TaskDetailsPage = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [projectName, setProjectName] = useState('');
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);

    const fetchTaskDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/projects/tasks/${taskId}`);
            const taskData = response.data;

            if (!taskData) {
                console.error('Task data is missing');
                return;
            }

            setTask(taskData);
            setProjectName(taskData.projectName || 'No project name');
            setProgress(taskData.progress || 0);
        } catch (error) {
            console.error('Error fetching task data:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/tasks/${taskId}/comments`);
            setCommentsList(response.data); // Update the comments list
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Fetch task details
    useEffect(() => {
        fetchTaskDetails();
        fetchComments();
    }, [taskId]);

    // Handle comment submit
    const handleCommentSubmit = async () => {
        if (comment.trim()) {
            try {
                // Make a POST request to insert the new comment
                const response = await axios.post(`http://localhost:5000/tasks/${taskId}/comments`, {
                    description: comment
                });
    
                // Fetch comments after posting the new comment
                fetchComments();
    
                setComment(''); // Clear the comment input field
            } catch (error) {
                console.error('Error posting comment:', error);
            }
        }
    };

    const handleBack = () => {
        if (comment.trim() || files.length > 0) {
            const confirmBack = window.confirm('You have unsaved changes. Are you sure you want to leave?');
            if (confirmBack) {
                navigate(-1);
            }
        } else {
            navigate(-1);
        }
    };

    if (!task) {
        return <h2 style={{ color: 'white' }}>Loading task details...</h2>;
    }

    return (
        <div style={{ backgroundColor: '#121212', color: '#fff', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaArrowLeft
                    style={{ cursor: 'pointer', marginRight: '20px', fontSize: '24px', color: '#fff' }}
                    onClick={handleBack}
                />
                <h1>Task Details</h1>
            </div>

            <h2 style={{ marginBottom: '20px' }}>{task.title}</h2>
            <p><strong>Project:</strong> {projectName}</p>
            <p><strong>Due Date:</strong> {task.due_date}</p>

            <div>
                <strong>Progress:</strong>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(parseInt(e.target.value, 10))}
                    style={{ width: '100%' }}
                />
                <span>{progress}% Complete</span>
            </div>

            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Assigned Members:</strong> {Array.isArray(task.assigned_to_name) ? task.assigned_to_name.join(', ') : 'No members assigned'}</p>
            <p><strong>Description:</strong> {task.description || 'No description available'}</p>

            {/* Comments Section */}
            <div>
                <strong>Comments:</strong>
                <textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ width: '100%', height: '100px', backgroundColor: '#333', color: '#fff' }}
                />
                <button onClick={handleCommentSubmit} style={{ marginTop: '10px' }}>Submit Comment</button>
            </div>

            <div>
                <strong>Previous Comments:</strong>
                <ul>
                    {commentsList.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.pm_name}</strong> ({new Date(comment.created_at).toLocaleTimeString()}): {comment.description}
                        </li>
                    ))}
                </ul>
            </div>

            {/* File Upload and Task Completion */}
            <div>
                <button onClick={() => alert('Task marked as completed')}>Mark as Completed</button>
                <label>
                    Attach File
                    <input type="file" onChange={(e) => setFiles(e.target.files)} multiple />
                </label>
            </div>
        </div>
    );
};

export default TaskDetailsPage;
