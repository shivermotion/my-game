import React from 'react';

type ModelViewerProps = {
  src: string;
  alt: string;
  style?: any;
};

const ModelViewer = ({ src, alt, style }: ModelViewerProps) => (
  <model-viewer src={src} alt={alt} auto-rotate camera-controls style={{width:"600px", height:"400px"}}></model-viewer>
);

export default ModelViewer;
