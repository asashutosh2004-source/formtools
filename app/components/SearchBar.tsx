"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const tools = [
  { name: "Merge PDF", path: "/tools/merge-pdf", icon: "📄" },
  { name: "Compress PDF", path: "/tools/compress-pdf", icon: "🗜" },
  { name: "Split PDF", path: "/tools/split-pdf", icon: "✂️" },
  { name: "Image Resizer", path: "/tools/image-resizer", icon: "🖼️" },
];

const filteredTools = useMemo(() => {
  if (!search.trim()) return [];

  return tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );
}, [search]);
  const router = useRouter();

  const handleSearch = () => {
    const value = search.toLowerCase().trim();

    if (value.includes("merge")) {
      router.push("/tools/merge-pdf");
    } else if (value.includes("compress")) {
      router.push("/tools/compress-pdf");
    } else if (value.includes("split")) {
      router.push("/tools/split-pdf");
    } else if (value.includes("image") || value.includes("resize")) {
      router.push("/tools/image-resizer");
    } else {
      alert("No tool found!");
    }
  };

  return (
    <div className="relative mx-auto mt-10 max-w-2xl">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Search PDF, Image or Document Tools..."
        className="w-full rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-4 pr-32 text-lg text-white outline-none backdrop-blur-xl focus:border-cyan-400"
      />

      <button
        onClick={handleSearch}
        className="absolute right-2 top-2 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
      >
        Search
      </button>
      {filteredTools.length > 0 && (
  <div className="absolute left-0 right-0 top-[72px] z-50 overflow-hidden rounded-xl border border-cyan-400/20 bg-[#0b1220]/95 shadow-[0_0_25px_rgba(34,211,238,.15)] backdrop-blur-xl">
    {filteredTools.map((tool) => (
      <button
        key={tool.path}
        onClick={() => router.push(tool.path)}
        className="flex w-full items-center gap-3 border-b border-white/5 px-5 py-4 text-left text-white transition hover:bg-cyan-500/10"
      >
        <span className="text-xl">{tool.icon}</span>

        <span>{tool.name}</span>
      </button>
    ))}
  </div>
)}
    </div>
  );
}