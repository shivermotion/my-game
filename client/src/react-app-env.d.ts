/// <reference types="react-scripts" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}

declare module '*.obj' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.gltf' {
  const content: string;
  export default content;
}
