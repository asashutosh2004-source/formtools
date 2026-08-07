"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  FileText,
  Archive,
  Image as ImageIcon,
} from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export default function ToolCard({ title, description }: Props) {
  let Icon = FileText;

  if (title === "Compress PDF") {
    Icon = Archive;
  }

  if (title === "Image Resizer") {
    Icon = ImageIcon;
  }
const toolLink =
  title === "Merge PDF"
    ? "/tools/merge-pdf"
    : title === "Compress PDF"
    ? "/tools/compress-pdf"
    : title === "Split PDF"
    ? "/tools/split-pdf"
    : title === "Image Resizer"
    ? "/tools/image-resizer"
    : "#";
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="tool-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon size={28} strokeWidth={2.2} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-slate-300">
        {description}
      </p>

      {/* Button */}
      <Link
 
  href={toolLink}
  className="relative z-20 mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:gap-3"
>
  Open Tool
  <span>→</span>
</Link>


      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </motion.div>
  );
}