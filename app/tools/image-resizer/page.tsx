"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
export default function ImageResizer() {
    const [file, setFile] = useState<File | null>(null);

const onDrop = useCallback((acceptedFiles: File[]) => {
  if (acceptedFiles.length > 0) {
    setFile(acceptedFiles[0]);
  }
}, []);

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  accept: {
    "image/*": [".jpg", ".jpeg", ".png", ".webp"],
  },
  multiple: false,
  onDrop,
});
  return (
    <main className="relative z-[9999] min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-5xl font-black">
          Image Resizer
        </h1>

        <p className="mt-4 text-center text-slate-300">
          Resize Aadhaar, PAN Card and Passport photos instantly.
        </p>

        <div
         {...getRootProps()}
          className={`relative z-50 mt-10 cursor-pointer rounded-2xl border-2 border-dashed p-16 text-center transition-all duration-300 ${
          isDragActive
         ? "border-cyan-400 bg-cyan-500/10"
            : "border-cyan-400/30 hover:border-cyan-400"
          }`}
         >         
         <input {...getInputProps()} />
          <p className="text-2xl font-semibold">
            🖼 Upload Image
          </p>

          <p className="relative z-[9999] mt-3 text-slate-400">
            Drag & Drop or Click to Browse
          </p>
        </div>

      </div>
    </main>
  );
}