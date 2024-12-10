declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': {
      src: string;
      background?: string;
      speed?: number;
      style?: React.CSSProperties;
      loop?: boolean;
      autoplay?: boolean;
    }
  }
}
