import React, { useState, useEffect } from 'react';
import ModelViewer from '../../components/ui/special/ModelViewer/ModelViewer';

// Import your GachaGrabber model and other assets
// import GachaGrabberModel from 'path-to-your-model';
// import NpcModel from 'path-to-your-npc-model';

export const World = () => {
  const [event, setEvent] = useState('initial-explanation'); // Initial event
  const [npcMessage, setNpcMessage] = useState('');

  useEffect(() => {
    switch (event) {
      case 'initial-explanation':
        setNpcMessage('Welcome to the world! Here you can interact with the GachaGrabber to collect toys...');
        break;
      case 'new-feature-unlocked':
        setNpcMessage('Great! You have unlocked a new feature...');
        break;
      // ...other events and messages
      default:
        setNpcMessage('');
    }
  }, [event]);

  // Assume some function to handle a new feature unlock
  const handleNewFeatureUnlock = () => {
    setEvent('new-feature-unlocked');
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel: 1/4 of screen */}
      <div className="w-1/4 bg-left-panel-background">
        {/* Your content for the left panel */}
        asdfasdfasdfasdf
      </div>

      {/* Middle Section: GachaGrabber, 2/4 of screen */}
      <div className="w-1/2 flex items-center justify-center bg-middle-section-background">
        {/* Replace with your GachaGrabber model */}
        <ModelViewer src={''} alt={''} />
      </div>

      {/* Right Panel: 1/4 of screen */}
      <div className="w-1/4 bg-right-panel-background">
        {/* Your content for the right panel */}
        asdfj;lakdfjlsad
      </div>

      {/* Instructional NPC */}
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        {/* Replace with your NPC model */}
        {/* <NpcModel /> */}
        <div className="npc-dialog-box p-4 bg-white rounded shadow-lg">
          {npcMessage}
        </div>
      </div>
    </div>
  );
}
