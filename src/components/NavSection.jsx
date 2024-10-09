import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom"; // Updated import

import Modal from "./Modal";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
const NavSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openSignUp = () => {
    setIsSignUp(true);
    setModalOpen(true);
  };

  const openLogin = () => {
    setIsSignUp(false);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <nav className="w-full max-w-[1366px] h-[100px] bg-background  mx-auto flex justify-between items-center px-4 mt-[-8px]">
      <div className="w-full max-w-[1366px] h-[100px] bg-background mx-auto flex justify-between items-center px-4 mt-[-8px]">
        <div className="text-text hover:text-secondary text-3xl">
          JHAKA NAKA PRODUCTION
        </div>
        <div className="flex space-x-4 text-base items-center">
          <NavLink
            to="/home"
            className="text-text hover:text-secondary cursor-pointer"
          >
           User Management
          </NavLink>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-text hover:text-secondary cursor-pointer"
          >
            ABOUT US
          </Link>
          <Link
            to="movies"
            smooth={true}
            duration={500}
            className="text-text hover:text-secondary cursor-pointer"
          >
            OUR MOVIES
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-text hover:text-secondary cursor-pointer"
          >
            SERVICES
          </Link>
          <button
            className="text-text px-4 py-2 rounded hover:bg-primary border-2 border-gray-600"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="text-text px-4 py-2 rounded hover:bg-primary border-2 border-black"
            onClick={openSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Modal for Sign Up and Login */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </Modal>
    </nav>
  );
};

export default NavSection;
