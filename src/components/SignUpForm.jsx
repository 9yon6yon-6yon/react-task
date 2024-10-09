import { useState } from "react";
import image from "../assets/images/hero.jpeg";
import LoginForm from "./LoginForm";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false); // To control modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Sign up failed. Please try again."
        );
      }

      setSuccessMessage("Account created successfully! Please log in.");
      setShowLoginModal(true); // Show login modal after success
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex bg-white shadow-lg max-w-5xl">
      {/* Image Section */}
      <div className="hidden md:block w-1/2 rounded-l-lg">
        <img
          src={image}
          alt="Sign Up"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      {/* Form Section */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-3 border rounded-md border-gray-300"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-3 border font-sans rounded-md border-gray-300"
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-3 border rounded-md border-gray-300"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
          >
            Sign Up
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?
            <button
              onClick={() => setShowLoginModal(true)} // Open login modal
              className="text-primary hover:text-secondary ml-1"
            >
              Login
            </button>
          </p>
        </form>
      </div>

      {/* Modal for Login Form */}
      {showLoginModal && <LoginForm successMessage={successMessage} />}
    </div>
  );
};

export default SignUpForm;
