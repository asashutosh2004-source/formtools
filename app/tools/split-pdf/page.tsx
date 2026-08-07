
"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";

export default function SplitPDF() {
  const [file, setFile] = useState<File | null>(null);

const onDrop = useCallback((acceptedFiles: File[]) => {
  if (acceptedFiles.length > 0) {
    setFile(acceptedFiles[0]);
  }
}, []);

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  accept: {
    "application/pdf": [".pdf"],
  },
  multiple: false,
  onDrop,
});
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-center text-5xl font-black">
          Split PDF
        </h1>

        <p className="mt-4 text-center text-slate-300">
          Split your PDF into separate pages or custom page ranges.
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
            📄 Upload PDF
          </p>

          <p className="mt-3 text-slate-400">
            Drag & Drop or Click to Browse
          </p>
        </div>
        {file && (
  <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="font-semibold">{file.name}</p>

    <p className="mt-2 text-sm text-slate-400">
      {(file.size / 1024 / 1024).toFixed(2)} MB
    </p>
  </div>
)}
      </div>
    </main>
  );
}