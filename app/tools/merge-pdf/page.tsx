"use client";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

  if (!over || active.id === over.id) return;

  setFiles((items) => {
    const oldIndex = Number(active.id);
    const newIndex = Number(over.id);

    return arrayMove(items, oldIndex, newIndex);
  });
};
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);

        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedBytes = await mergedPdf.save();

      const blob = new Blob([mergedBytes as BlobPart], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      alert("PDF merged successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: true,
    onDrop,
  });

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-5xl font-black">
          Merge PDF
        </h1>

        <p className="mt-4 text-center text-slate-300">
          Upload multiple PDF files and merge them into one.
        </p>

        <div
          {...getRootProps()}
          className={`mt-10 cursor-pointer rounded-2xl border-2 border-dashed p-16 text-center transition-all ${
            isDragActive
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-cyan-400/30 hover:border-cyan-400"
          }`}
        >
          <input {...getInputProps()} />

          <p className="font-semibold">
            📄 Drag & Drop PDFs Here
          </p>

          <p className="mt-3 text-slate-400">
            or click to browse
          </p>
        </div>

        {files.length > 0 && (
          <>
            <div className="mt-10">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Selected Files
                </h2>

                <button
                  type="button"
                  onClick={clearFiles}
                  className="rounded-lg bg-red-500/20 px-4 py-2 text-red-400 hover:bg-red-500/30"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="max-w-[220px] md:max-w-[350px] truncate font-semibold">
  {file.name}
</p>

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="rounded-lg bg-red-500/20 px-3 py-2 text-red-400 hover:bg-red-500/30"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                disabled={files.length < 2}
                onClick={mergePDFs}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Merge PDFs
              </button>
            </div>
          </>
        )}

      </div>
    </main>
  );
}