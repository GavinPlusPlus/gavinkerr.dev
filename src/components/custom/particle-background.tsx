/// particle-background.tsx
/// Component that displays as particle background
///
/// Author: Gavin Kerr
/// Date: Wed Jun 12 2024

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { memo, useEffect, useState } from "react";
import "./particle-background.css"

const options: ISourceOptions = {
  "particles": {
    "color": {
      "value": "#fff"
    },
    "move": {
      "direction": "top",
      "enable": true,
      "outModes": "out",
      "speed": 2
    },
    "number": {
      "density": {
        "enable": true,
      },
      "value": 200
    },
    "opacity": {
      "value": 0.5
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 5
    },
    "wobble": {
      "enable": true,
      "distance": 4,
      "speed": 10
    },
    "zIndex": {
      "value": {
        "min": 0,
        "max": 100
      }
    },
    "retinaDetect": true,
  },
};

const MemoedBackground = memo(() => (
  <Particles
          id='ts-particles'
          options={options}
          className="h-full w-full animate-particle-fade-in"
        />
))

export const ParticleBackground = () => {

  const [loaded, setLoaded] = useState(false);

  // Initialize engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  if (loaded) {
    return (
      <div className="w-full h-full particle-background">
        <MemoedBackground />
      </div>
    );
  }

};