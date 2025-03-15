import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddMember = ({ projectId, setTeamMembers }) => {
    const [showAddMemberForm, setShowAddMemberForm] = useState(false);
    const [newMemberName, setNewMemberName] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch suggestions from backend (debounced)
    useEffect(() => {
        if (!newMemberName.trim()) {
            setFilteredSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            setLoading(true);

            try {
                const token = localStorage.getItem("token"); // Get auth token
                const response = await fetch(`http://localhost:5000/users/search?query=${newMemberName}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const text = await response.text();
                console.log("API Raw Response:", text); // Debugging
                const data = JSON.parse(text);

                setFilteredSuggestions(data);
            } catch (error) {
                console.error("Error fetching suggestions:", error);
                setFilteredSuggestions([]);
            } finally {
                setLoading(false);
            }
        };

        // Debounce API call
        const timeout = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeout);

    }, [newMemberName]); // Runs when input changes

    const handleAddMember = async () => {
        if (!newMemberName.trim()) return;
    
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:5000/invite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ projectId, userEmail: newMemberName.trim() }),
            });
    
            if (!response.ok) throw new Error("Failed to add member");
    
            alert("Invite sent successfully!");
            setShowAddMemberForm(false);
            setNewMemberName("");
        } catch (error) {
            console.error("Error adding member:", error);
            alert("Error adding member. Please try again.");
        }
    };

    return (
        <div>
            <div onClick={() => setShowAddMemberForm(true)}
                style={{ cursor: "pointer", color: "#00C851", marginLeft: "20px", fontSize: "18px", fontWeight: "bold" }}>
                <span style={{ marginRight: "5px" }}>+</span> Add Member
            </div>

            <Modal
                isOpen={showAddMemberForm}
                onRequestClose={() => setShowAddMemberForm(false)}
                style={{
                    overlay: {
                        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
                    },
                    content: {
                        backgroundColor: "#222", padding: "30px", borderRadius: "10px", width: "500px", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                        position: "relative", inset: "unset",
                    },
                }}>

                <h2 style={{ color: "#FFFFFF", textAlign: "center", marginBottom: "20px" }}>Add New Member</h2>

                <input
                    type="text"
                    placeholder="Enter member email..."
                    style={{ padding: "12px", borderRadius: "5px", border: "none", backgroundColor: "#333", color: "#FFFFFF", width: "100%", marginBottom: "10px", fontSize: "16px" }}
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                />

                {/* Autocomplete Suggestions */}
                {loading && <p style={{ color: "#aaa", fontSize: "14px", textAlign: "center" }}>Loading...</p>}
                {filteredSuggestions.length > 0 && !loading && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, backgroundColor: "#333", borderRadius: "5px", maxHeight: "150px", overflowY: "auto" }}>
                        {filteredSuggestions.map((email) => (
                            <li
                                key={email}
                                style={{ padding: "10px", cursor: "pointer", color: "#fff", backgroundColor: "#333" }}
                                onMouseDown={() => setNewMemberName(email)}
                            >
                                {email}
                            </li>
                        ))}
                    </ul>
                )}
                {filteredSuggestions.length === 0 && !loading && newMemberName.trim() && (
                    <p style={{ color: "#aaa", fontSize: "14px", textAlign: "center" }}>No results found</p>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <button onClick={() => setShowAddMemberForm(false)}
                        style={{ padding: "10px 18px", borderRadius: "5px", border: "none", backgroundColor: "#555", color: "#FFFFFF", cursor: "pointer", flex: 1, marginRight: "10px" }}>Cancel</button>
                    <button onClick={handleAddMember}
                        style={{ padding: "10px 18px", borderRadius: "5px", border: "none", backgroundColor: "#FF4500", color: "#FFFFFF", cursor: "pointer", fontWeight: "bold", flex: 1 }}>Add Member</button>
                </div>

            </Modal>
        </div>
    );
};

export default AddMember;
