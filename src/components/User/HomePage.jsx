import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import ProfileCard from "./ProfileCard";

const apiUrl = "https://wesoftin-backend.vercel.app"; // replace with actual API URL

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [message, setMessage] = useState("");
  const [editing, setEditing] = useState(false);

  // GET all users
  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // POST create new user
  const createUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (data.acknowledged) {
        setMessage("User created successfully!");
        getUsers(); // Refresh user list
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // PUT update existing user
  const updateUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/users/${selectedUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (data.modifiedCount > 0) {
        setMessage("User updated successfully!");
        getUsers();
        setEditing(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // DELETE user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/users/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setMessage("User deleted successfully!");
        getUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Load users on component mount
  useEffect(() => {
    getUsers();
  }, []);

  // Set user data for editing
  const handleEdit = (user) => {
    setNewUser(user);
    setSelectedUserId(user._id);
    setEditing(true);
  };

  return (
    <>
      <div className="container mx-auto p-4 mb-10 bg-indigo-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </div>
      </div>
      <div>
        <ProfileCard
          user={selectedUser}
          newuser={setSelectedUser}
          message={message}
          setEditing={setEditing}
          editing={editing}
          handleEdit={handleEdit}
          handleInputChange={handleInputChange}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
};

export default HomePage;
