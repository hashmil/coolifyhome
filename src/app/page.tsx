'use client';

import React from "react";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script 
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
        type="module"
      />
      <div className="container">
        <dotlottie-player
          src="https://lottie.host/b7ca8018-c2e9-4839-9a5d-d9791e4a782b/PCytqtLvk3.lottie"
          background="transparent"
          speed={1}
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        />
        <p className="message">nothing to see here...</p>
      </div>
    </>
  );
}
