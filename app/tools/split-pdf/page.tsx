"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function SplitPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const [splitMode, setSplitMode] = useState<
    "every" | "range" | "selected"
  >("every");

  const [pageRange, setPageRange] = useState("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      if (acceptedFiles.length === 0) return;

      const uploadedFile = acceptedFiles[0];

      setFile(uploadedFile);

      const bytes = await uploadedFile.arrayBuffer();

      const pdf = await PDFDocument.load(bytes);

      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
  });

  const handleSplit = async () => {
    alert("Button Clicked");
    if (!file) return;

    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      console.log("Mode:", splitMode);
      console.log("Pages:", pdf.getPageCount());
      if (splitMode === "every") {
        
        if (splitMode === "range") {
  if (!pageRange.includes("-")) {
    alert("Enter range like 1-5");
    return;
  }

  const [start, end] = pageRange.split("-").map(Number);

  if (
    isNaN(start) ||
    isNaN(end) ||
    start < 1 ||
    end > pdf.getPageCount() ||
    start > end
  ) {
    alert("Invalid page range");
    return;
  }

  const newPdf = await PDFDocument.create();

  const pageIndexes = [];

  for (let i = start - 1; i < end; i++) {
    pageIndexes.push(i);
  }

  const copiedPages = await newPdf.copyPages(pdf, pageIndexes);

  copiedPages.forEach((page) => newPdf.addPage(page));

  const pdfBytes = await newPdf.save();
  saveAs(
  new Blob([pdfBytes], { type: "application/pdf" }),
  `pages-${start}-${end}.pdf`
);

  return;
}
        
        const zip = new JSZip();

        for (let i = 0; i < pdf.getPageCount(); i++) {
          const singlePdf = await PDFDocument.create();

          const [page] = await singlePdf.copyPages(pdf, [i]);

          singlePdf.addPage(page);

          const pdfBytes = await singlePdf.save();

          zip.file(`page-${i + 1}.pdf`, pdfBytes);
        }

        const zipBlob = await zip.generateAsync({
          type: "blob",
        });

        saveAs(zipBlob, "Split-PDF.zip");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to split PDF");
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-28 text-white">

  <h1 className="text-center text-5xl font-black">
    Split PDF
  </h1>

  <p className="mt-4 text-center text-slate-300">
    Split your PDF into separate pages or custom page ranges.
  </p>

  <div
    {...getRootProps()}
    className={`mt-10 cursor-pointer rounded-2xl border-2 border-dashed p-16 text-center transition-all duration-300 ${
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

    <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-white/5 p-6">

      <h2 className="text-2xl font-bold">
        {file.name}
      </h2>

      <p className="mt-3 text-slate-300">
        File Size: {(file.size / 1024 / 1024).toFixed(2)} MB
      </p>

      <p className="mt-2 text-cyan-400 font-semibold">
        Total Pages: {totalPages}
      </p>

      <div className="mt-8">

        <h3 className="mb-4 text-xl font-bold">
          Split Method
        </h3>

        <div className="space-y-4">

          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="radio"
              value="every"
              checked={splitMode === "every"}
              onChange={() => setSplitMode("every")}
            />

            <span>Every Page</span>

          </label>

          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="radio"
              value="range"
              checked={splitMode === "range"}
              onChange={() => setSplitMode("range")}
            />

            <span>Custom Range</span>

          </label>

          {splitMode === "range" && (

            <input
              type="text"
              placeholder="Example : 1-5 or 2,4,7"
              value={pageRange}
              onChange={(e) => setPageRange(e.target.value)}
              className="w-full rounded-xl border border-cyan-400/30 bg-[#0B1220] px-4 py-3 outline-none"
            />

          )}

          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="radio"
              value="selected"
              checked={splitMode === "selected"}
              onChange={() => setSplitMode("selected")}
            />

            <span>Extract Selected Pages</span>

          </label>

          <button
            onClick={handleSplit}
            className="mt-6 w-full cursor-pointer rounded-2xl bg-cyan-500 py-4 text-lg font-bold transition hover:bg-cyan-400">
            ✂️ Split PDF
          </button>

        </div>

      </div>

    </div>

  )}
  </main>
  );
}