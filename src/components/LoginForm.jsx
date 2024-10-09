import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import image from "../assets/images/hero.jpeg";

const LoginForm = ({ successMessage, closeLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
  
    try {
      // Perform login request
      const response = await fetch("http://127.0.0.1:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed. Please try again.");
      }
  
      // Successful login
      const data = await response.json();
      console.log("Login successful!", data); // Handle successful login
      setLoginSuccess(true);
      
      // Close login modal if you have one
      if (closeLoginModal) closeLoginModal();
      
      // Redirect to homepage
      navigate("/home"); // Redirect to homepage or the route of your choice

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex bg-white shadow-lg max-w-5xl">
      {/* Image Section */}
      <div className="hidden md:block w-1/2 rounded-l-lg">
        <img
          src={image} // Replace with your image URL
          alt="Login"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      {/* Form Section */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {loginSuccess && (
          <p className="text-green-500">Login successful! Redirecting...</p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-3 border rounded-md border-gray-300"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-3 border rounded-md border-gray-300"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
