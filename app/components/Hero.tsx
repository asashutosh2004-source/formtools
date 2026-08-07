"use client";

import Background from "./Background";
import SearchBar from "./SearchBar";
import ToolCard from "./ToolCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050816]">


    
      <Background />

      {/* Content */}
<div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start pt-32 px-6 text-white">      

        <div className="mb-6 rounded-full border border-cyan-400/30 bg-white/5 px-5 py-2 backdrop-blur-lg">
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-sm font-semibold tracking-[4px] text-transparent">
            FAST • SECURE • FREE
          </span>
        </div>

        <h1 className="text-center text-6xl font-black tracking-tight md:text-8xl">
          <span
  className="text-white"
  style={{
    textShadow:
      "0 0 20px rgba(255,255,255,.18), 0 0 40px rgba(34,211,238,.15)",
  }}
>
  FormTools
</span>
          <br />
          <span
  className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent"
  style={{
    filter: "drop-shadow(0 0 18px rgba(34,211,238,.45))",
  }}
>
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-center text-xl text-slate-300">
          Convert, Compress, Merge, Resize and edit your PDF, Images and
          Documents in one place.
        </p>

        <div className="mt-10">
          <SearchBar />
        </div>

        <div className="mt-16 grid w-full max-w-6xl gap-6 md:grid-cols-3">

          <ToolCard
            title="Merge PDF"
            description="Combine multiple PDF files into one."
          />

          <ToolCard
            title="Compress PDF"
            description="Reduce PDF size without losing quality."
          />

          <ToolCard
            title="Image Resizer"
            description="Resize Aadhaar, PAN & Passport images."
          />
           
            <ToolCard
             title="Split PDF"
             description="Split PDF pages into separate files."
          />
        </div>
        {/* Stats */}
<div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
    <h2 className="text-4xl font-black text-cyan-400">50+</h2>
    <p className="mt-2 text-slate-300">Powerful Tools</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
    <h2 className="text-4xl font-black text-cyan-400">1M+</h2>
    <p className="mt-2 text-slate-300">Files Processed</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
    <h2 className="text-4xl font-black text-cyan-400">99.9%</h2>
    <p className="mt-2 text-slate-300">Uptime</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
    <h2 className="text-4xl font-black text-cyan-400">100%</h2>
    <p className="mt-2 text-slate-300">Secure</p>
  </div>

</div>

      </div>
{/* Contact Section */}
<section
  id="contact"
  className="mt-32 w-full border-t border-white/10 bg-white/5 py-20 backdrop-blur-xl"
>
  <div className="mx-auto max-w-5xl px-6 text-center">

  <h2 className="text-3xl font-black text-white">
    Get in Touch
  </h2>

  <p className="mx-auto mt-3 max-w-1xl text-lg leading-8 text-slate-300">
    Have a question, found a bug, or want to request a new tool?
    We'd love to hear from you. Your feedback helps us improve
    FormTools and build better tools for everyone.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-3 text-4xl">📧</div>

      <h3 className="text-xl font-bold text-white">
        Email
      </h3>

      <a
  href="mailto:support@formtools.com"
  className="mt-2 block text-cyan-400 hover:underline"
>
  support@formtools.com
</a>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-3 text-4xl">💡</div>

      <h3 className="text-xl font-bold text-white">
        Feature Request
      </h3>

    <a
  href="mailto:support@formtools.com?subject=Feature%20Request"
  className="mt-2 block text-cyan-400 hover:underline"
>
  Suggest a New Tool
</a>  
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-3 text-4xl">🐞</div>

      <h3 className="text-xl font-bold text-white">
        Report a Bug
      </h3>

      <a
  href="mailto:support@formtools.com?subject=Bug%20Report"
  className="mt-2 block text-cyan-400 hover:underline"
>
  Report an Issue
</a>
    </div>

  </div>

 
</div>
</section>
    </section>
  );
}