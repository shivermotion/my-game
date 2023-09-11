import React from 'react';

type ModelViewerProps = {
  src: string;
  alt: string;
  style?: any;
};

const ModelViewer = ({ src, alt, style }: ModelViewerProps) => (
  <model-viewer src={src} alt={alt} auto-rotate camera-controls poster="/poster.webp"  preload style={{width:"100%", height:"60vh"}}></model-viewer>
);

export default ModelViewer;
