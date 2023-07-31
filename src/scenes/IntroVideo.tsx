import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/capsule.jpg';

export const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/main-menu'); // Redirect to the MainMenu after 5 seconds
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src={logo}
        alt="logo"
        className="w-16 h-16"
        style={{ animation: 'spin 2s linear infinite' }}
      />
      <p className="text-white text-xl ml-4">Presented by Nexrage Games</p>
    </div>
  );
};
