"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  file: File;
  index: number;
  removeFile: (index: number) => void;
};

export default function SortableFile({
  id,
  file,
  index,
  removeFile,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex cursor-grab items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 active:cursor-grabbing"
    >
      <div>
        <p className="font-semibold">{file.name}</p>

        <p className="text-sm text-slate-400">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      </div>

      <button
        type="button"
        onClick={() => removeFile(index)}
        className="rounded-lg bg-red-500/20 px-3 py-2 text-red-400 hover:bg-red-500/30"
      >
        ✕
      </button>
    </div>
  );
}