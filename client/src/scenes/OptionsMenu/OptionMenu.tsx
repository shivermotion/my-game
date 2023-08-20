import React, { useState } from "react";
import { Button } from "../../components/ui/common/Button";
import { Link } from "react-router-dom";
import { Background } from "../MainMenu/Background/Background";
import LogoutModal from "../../components/ui/modals/LogoutModal";
import "../MainMenu/Background/Background.css"

export const OptionMenu: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [masterVolume, setMasterVolume] = useState(50);
  const [sfxVolume, setSfxVolume] = useState(50);
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [graphicsQuality, setGraphicsQuality] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMasterVolume(Number(e.target.value));
  };

  const handleSfxVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSfxVolume(Number(e.target.value));
  };

  const handleColorBlindToggle = () => {
    setColorBlindMode(!colorBlindMode);
  }

  const handleGraphicsQualityToggle = () => {
    setGraphicsQuality(!graphicsQuality);
  }


  const handleLogout = () => {
    // Remove the token and redirect to login
    console.log('Logging out...'); // This should appear in the console when you click logout
    localStorage.removeItem('authToken');
    if (!localStorage.getItem('token')) {
      console.log('Token has been removed');
    } else {
      console.log('Token is still present');
    }
    window.location.href = '/';
  };

  return (
    <>
      <Background/>
      <div className="flex flex-col h-screen justify-center items-center ">
        <div className="w-full max-w-md p-6 bg-[#FED7AA] shadow rounded-xl  border-2 border-orange-800 space-y-6 ">
          <h1 className="text-2xl font-bold text-center ">Option Menu</h1>
          <div className="flex items-center justify-between">
            <label htmlFor="language" className="text-sm font-bold">Language:</label>
            <select
              name="language"
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="border rounded p-2"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="Japanese">日本語</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="masterVolume" className="text-sm font-bold">Master Volume:</label>
            <div className="flex items-center">
              <input
                type="range"
                id="masterVolume"
                name="masterVolume"
                min="0"
                max="100"
                value={masterVolume}
                onChange={handleVolumeChange}
                className="w-full"
              />
              <span className="ml-2">{masterVolume}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="sfxVolume" className="text-sm font-bold">SFX Volume:</label>
            <div className="flex items-center">
              <input
                type="range"
                id="sfxVolume"
                name="sfxVolume"
                min="0"
                max="100"
                value={sfxVolume}
                onChange={handleSfxVolumeChange}
                className="w-full"
              />
              <span className="ml-2">{sfxVolume}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">Color Blind Mode:</span>
            <button onClick={handleColorBlindToggle} className={`px-4 py-2 rounded font-bold ${colorBlindMode ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
              {colorBlindMode ? 'ON' : 'OFF'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">Graphics Quality:</span>
            <button onClick={handleGraphicsQualityToggle} className={`px-4 py-2 rounded font-bold ${graphicsQuality ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
              {graphicsQuality ? 'High' : 'Low'}
            </button>
          </div>
          <Link to="/main-menu" className="mt-4">
            <Button text="TO START SCREEN"  />
          </Link>
            <Button onClick={()=>{setIsLogoutModalOpen(true)}} text="QUIT" />
        </div>
      </div>
       <LogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsLogoutModalOpen(false)} />
        </>
  );
}
