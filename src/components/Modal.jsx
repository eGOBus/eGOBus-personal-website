import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigation = (path) => {
    onClose(); // Close the modal before navigating
    navigate(path);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
        <button
          onClick={() => handleNavigation('/workingDriver')}
          className="block w-full py-2 mb-2 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded"
        >
          Working Driver
        </button>
        <button
          onClick={() => handleNavigation('/workingParent')}
          className="block w-full py-2 mb-2 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded"
        >
          Working Parent
        </button>
        <button
          onClick={() => handleNavigation('/workingSchool')}
          className="block w-full py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded"
        >
          Working School
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-red-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
