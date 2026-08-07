"use client";

export default function NeonBeam() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
    >
      <defs>
  <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="transparent" />
    <stop offset="25%" stopColor="#22d3ee" />
    <stop offset="50%" stopColor="#3b82f6" />
    <stop offset="75%" stopColor="#a855f7" />
    <stop offset="100%" stopColor="transparent" />
  </linearGradient>
</defs>
      <path
        className="beam beam1"
        d="M-200 220 C 350 80, 900 380, 2200 120"
      />

      <path
        className="beam beam2"
        d="M-250 760 C 450 520, 1050 920, 2200 640"
      />
    </svg>
  );
}