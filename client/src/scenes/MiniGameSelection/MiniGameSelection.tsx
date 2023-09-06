import React, { useState } from "react";
import Game1 from "../MiniGameSelection/Game1/Game1"; // Import your game components
import GameModal from "../../components/ui/modals/GameModal"; // Import your modal component
import SpinningRectangle from "../../components/ui/special/SpinningRectangle/SpinningRectangle";
import {QTEGame} from "./JTEBoxing/JTEBoxing";

export const MiniGameSelection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const openModal = (game:any) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGame(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600">
        MiniGameSelection
      </h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <SpinningRectangle onClick={() => openModal(<QTEGame />)} />
        {/* Add other SpinningRectangle components for other games */}
      </div>

      <GameModal isOpen={modalOpen} onClose={closeModal}>
        {selectedGame}
      </GameModal>
    </div>
  );
};
