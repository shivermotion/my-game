import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/capsule.jpg';

export const Intro = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(0);

  // Check for token in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      // Redirect to remove token from URL, if desired
      window.location.href = '/intro';
    }
  }, []);

  // Fade in effect
  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(fadeIn);
  }, []);

  // Redirect after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(0); // Fade out effect
      setTimeout(() => navigate('/main-menu'), 1000); // Redirect after fade out
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-screen" style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
      <p className="text-black text-xl md:text-3xl lg:text-3xl font-bold font-mario text-center mb-4">PRESENTED BY</p>
      <p className="text-black text-2xl md:text-4xl lg:text-6xl font-bold font-mario text-center mb-4">NEXRAGE GAMES</p>
      <img src={logo} alt="logo" className="w-[5%] w-[5%] spin-image" />
    </div>
  );
};
