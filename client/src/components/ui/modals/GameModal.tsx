import React from "react";
import Modal from "react-modal";

const GameModal = ({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose}>Close Game</button>
      {children}
    </Modal>
  );
};

export default GameModal;
