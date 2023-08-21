import React from 'react';

const LogoutModal = ({ isOpen, onConfirm, onCancel } : {isOpen: boolean, onConfirm: any, onCancel: any} ) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg text-center">
        <h3 className="text-xl mb-4">Are you sure you want to log out?</h3>
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Yes, Log Out
        </button>
        <button onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
