import { useState, useEffect } from 'react';

const apiUrl = 'https://wesoftin-backend.vercel.app'; // replace with actual API URL

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
    nationality: '',
    skills: '',
    nid: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    gender: '',
    educationalQualifications: {
      degree: '',
      university: '',
      session: '',
      cgpa: ''
    }
  });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(false);

  // GET all users
  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // POST create new user
  const createUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (data.acknowledged) {
        setMessage('User created successfully!');
        getUsers(); // Refresh user list
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // PUT update existing user
  const updateUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/users/${selectedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (data.modifiedCount > 0) {
        setMessage('User updated successfully!');
        getUsers();
        setEditing(false);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // DELETE user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setMessage('User deleted successfully!');
        getUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
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
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">HomePage - User Management</h1>

      {/* Form Section */}
      <form className="space-y-4 mb-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="number"
            name="age"
            placeholder="Age"
            value={newUser.age}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={newUser.nationality}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="nid"
            placeholder="NID"
            value={newUser.nid}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="address"
            placeholder="Address"
            value={newUser.address}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="gender"
            placeholder="Gender"
            value={newUser.gender}
            onChange={handleInputChange}
          />
          {/* Educational Info */}
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="educationalQualifications.degree"
            placeholder="Degree"
            value={newUser.educationalQualifications.degree}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="educationalQualifications.university"
            placeholder="University"
            value={newUser.educationalQualifications.university}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            name="educationalQualifications.session"
            placeholder="Session"
            value={newUser.educationalQualifications.session}
            onChange={handleInputChange}
          />
          <input
            className="border p-2 rounded w-full"
            type="number"
            step="0.01"
            name="educationalQualifications.cgpa"
            placeholder="CGPA"
            value={newUser.educationalQualifications.cgpa}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={editing ? updateUser : createUser}
          >
            {editing ? 'Update User' : 'Create User'}
          </button>
          {editing && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setEditing(false);
                setNewUser({ ...newUser, name: '', email: '', age: '' });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Message */}
      {message && <p className="text-green-500 mb-4">{message}</p>}

      {/* Display Users */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Users List</h2>
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user._id} className="border p-4 rounded">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <div className="flex space-x-4 mt-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
