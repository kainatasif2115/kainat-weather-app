import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Header = ({ userName, tabName }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      
      navigate('/login');
    });
  };

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center text-white ml-64">
      <div className="flex items-center">
        <span className="text-2xl font-bold">{tabName}</span>
      </div>
      <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-xl"
      >
        <span className="mr-2">{userName}</span>
        <FontAwesomeIcon icon={faUser} />
      </button>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md">
              <ul>
                <li className="cursor-pointer rounded-lg px-4 py-2 hover:bg-blue-100 text-blue-500 font-semibold">{userName}</li>
                <li
                  className="cursor-pointer rounded-lg px-4 py-2 hover:bg-blue-100 text-blue-500 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
