"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: "transparent",
      },
      fpsLimit: 120,
      detectRetina: true,
      particles: {
        number: {
          value: 45,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },
        color: {
          value: "#00f5ff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.35 },
        },
        size: {
          value: { min: 0.8, max: 2.2 },
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 140,
          color: "#00f5ff",
          opacity: 0.15,
          width: 0.8,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.35,
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Removed hardcoded background to allow Hero background to show */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,245,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(0,245,255,0.04),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,245,255,0.04),transparent_35%)]" />

      <Particles
        id="hero-particles"
        className="absolute inset-0 h-full w-full"
        options={options}
      />

      {/* Removed bottom fade to allow Hero background to show */}
    </div>
  );
}
