import React from 'react';

type ModelViewerProps = {
  src: string;
  alt: string;
  style?: any;
  poster?: string;
  className?: string; 
};

const ModelViewer = ({ src, alt, style, poster, className }: ModelViewerProps) => (
  <div className={className}>
  <model-viewer 
    src={src} 
    alt={alt} 
    auto-rotate 
    camera-controls 
    poster={poster}  
    preload 
    style={{width:"100%", height:"60vh", ...style}} 
  >
    </model-viewer>
  </div>
);

export default ModelViewer;
