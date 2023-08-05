import React, { useState } from "react";
import { Button } from "../../components/ui/common/Button";
import { Link } from "react-router-dom";
import { Background } from "../MainMenu/Background/Background";
import "../MainMenu/Background/Background.css"

export const OptionMenu: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [masterVolume, setMasterVolume] = useState(50);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMasterVolume(Number(e.target.value));
  };

  return (
    <>
    <Background/>
    <div className="flex flex-col h-screen justify-between items-center space-y-4">
      <div className="flex flex-col space-y-4">
        <h1>Option Menu</h1>
        <div className="flex items-center justify-between">
          <label htmlFor="language">Language:</label>
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
          <label htmlFor="masterVolume">Master Volume:</label>
          <input
            type="range"
            id="masterVolume"
            name="masterVolume"
            min="0"
            max="100"
            value={masterVolume}
            onChange={handleVolumeChange}
          />
          <span>{masterVolume}%</span>
        </div>
      </div>
      <Link to="/main-menu" className="mb-4">
        <Button text="To Start Screen" />
      </Link>
    </div>
    </>
  );
}
