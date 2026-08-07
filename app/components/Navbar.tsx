"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FormTools"
            width={40}
            height={40}
            className="rounded-xl"
          />

          <span className="text-2xl font-black tracking-tight text-white">
            FormTools
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white">

          <button
  onClick={() => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  }}
  className="hover:text-cyan-400 transition"
>
  Home
</button>

          {/* PDF Tools */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-cyan-400 transition">
              PDF Tools
              <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full mt-1 z-50 hidden w-64 rounded-2xl border border-white/10 bg-[#0B1220]/95 p-2 shadow-2xl backdrop-blur-xl group-hover:block">

                <Link
                  href="/tools/merge-pdf"
                  className="block rounded-lg px-4 py-3 hover:bg-cyan-500/10"
                >
                  📄 Merge PDF
                </Link>

                <Link
                  href="/tools/compress-pdf"
                  className="block rounded-lg px-4 py-3 hover:bg-cyan-500/10"
                >
                  🗜 Compress PDF
                </Link>

                <Link
                  href="/tools/split-pdf"
                  className="block rounded-lg px-4 py-3 hover:bg-cyan-500/10"
                >
                  ✂️ Split PDF
                </Link>

              </div>
            </div>
          

        
          {/* Image Tools */}
<div className="relative group">
  <button className="flex items-center gap-1 hover:text-cyan-400 transition">
    Image Tools
    <ChevronDown size={16} />
  </button>

  <div className="absolute left-0 top-full mt-1 z-50 hidden w-64 rounded-2xl border border-white/10 bg-[#0B1220]/95 p-2 shadow-2xl backdrop-blur-xl group-hover:block">

    <Link
      href="/tools/image-resizer"
      className="block rounded-lg px-4 py-3 hover:bg-cyan-500/10"
    >
      🖼 Image Resizer
    </Link>

    <button
      className="block w-full cursor-not-allowed rounded-lg px-4 py-3 text-left text-gray-400"
    >
      🗜 Compress Image
      <span className="ml-2 rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">
        Soon
      </span>
    </button>

    <button
      className="block w-full cursor-not-allowed rounded-lg px-4 py-3 text-left text-gray-400"
    >
      ✂️ Crop Image
      <span className="ml-2 rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">
        Soon
      </span>
    </button>

    <button
      className="block w-full cursor-not-allowed rounded-lg px-4 py-3 text-left text-gray-400"
    >
      🪄 Background Remover
      <span className="ml-2 rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">
        Soon
      </span>
    </button>

  
</div>
            <button className="flex items-center gap-1 hover:text-cyan-400 transition">
              
            
            </button>

            {imageOpen && (
              <div className="absolute left-0 top-12 w-64 rounded-2xl border border-white/10 bg-[#0B1220]/95 p-2 backdrop-blur-xl shadow-2xl">

                <Link
                  href="/tools/image-resizer"
                  className="block rounded-lg px-4 py-3 hover:bg-cyan-500/10"
                >
                  🖼 Image Resizer
                </Link>

              </div>
            )}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-cyan-400 transition"
          >
            Contact
          </button>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
    </nav>
  );
}