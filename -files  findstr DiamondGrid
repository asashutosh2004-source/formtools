"use client";

import { useEffect, useState } from "react";
import Aurora from "./Aurora";
import NeonBeam from "./NeonBeam";

export default function Background() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate particles only once
  const [particles, setParticles] = useState<
  {
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }[]
>([]);

useEffect(() => {
  setParticles(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${8 + Math.random() * 10}s`,
    }))
  );
}, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Aurora */}
      <div className="absolute inset-0 z-10">
        <Aurora />
      </div>

      {/* Spotlight */}
      <div className="spotlight absolute inset-0 z-20" />

      {/* NeonBeam Component */}
      <div className="absolute inset-0 z-30">
        <NeonBeam />
      </div>

      {/* Mouse Glow */}
      <div
        className="absolute z-40 h-[220px] w-[220px] rounded-full"
        style={{
          transform: `translate(${mouse.x - 110}px, ${mouse.y - 110}px)`,
          background:
            "radial-gradient(circle, rgba(95, 90, 162, 0.99), transparent 70%)",
          filter: "blur(40px)",
          transition: "transform 120ms linear",
        }}
      />

      {/* Noise Layer */}
      <div className="noise absolute inset-0 z-50" />

      {/* Diamond Mesh */}
<div
  className="absolute inset-0 z-50 opacity-20"
  style={{
    backgroundImage: "url('/diamond-grid.svg')",
    backgroundRepeat: "repeat",
    backgroundSize: "80px 80px",
  }}
/>
      

      {/* Glow Effects */}
      <div className="glow glow1 absolute z-20" />
      <div className="glow glow2 absolute z-20" />
      <div className="glow glow3 absolute z-20" />

      {/* Neon Beam 1 */}
      <div
        className="neon-beam absolute z-30"
        style={{
          top: "22%",
          left: "-900px",
        }}
      />

      {/* Neon Beam 2 */}
      <div
        className="neon-beam neon-beam-2 absolute z-30"
        style={{
          top: "68%",
          left: "-900px",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute z-40"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
          }}
        />
      ))}
    </div>
  );
}