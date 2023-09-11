import React from 'react';

type ModelViewerProps = {
  src: string;
  alt: string;
  style?: any;
  poster?: string;
};

const ModelViewer = ({ src, alt, style, poster }: ModelViewerProps) => (
  <model-viewer src={src} alt={alt} auto-rotate camera-controls poster={poster}  preload style={{width:"100%", height:"60vh"}}></model-viewer>
);

export default ModelViewer;
