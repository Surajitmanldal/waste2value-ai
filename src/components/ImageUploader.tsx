"use client";

import { ChangeEvent, DragEvent, useRef } from "react";
import Image from "next/image";
import { Camera, CloudUpload, X } from "./Icons";

type ImageUploaderProps = { imageUrl: string | null; onImageSelect: (file: File) => void; onRemove: () => void };

export function ImageUploader({ imageUrl, onImageSelect, onRemove }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFile = (file?: File) => { if (file?.type.startsWith("image/")) onImageSelect(file); };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => handleFile(event.target.files?.[0]);
  const onDrop = (event: DragEvent<HTMLDivElement>) => { event.preventDefault(); handleFile(event.dataTransfer.files[0]); };

  if (imageUrl) return <div className="relative overflow-hidden rounded-3xl border border-[#dbe9dd] bg-[#f2f7f2] p-3">
    <div className="relative h-[420px] w-full">
      <Image className="rounded-2xl object-contain" src={imageUrl} alt="Selected waste item preview" fill unoptimized sizes="(max-width: 768px) 100vw, 700px" />
    </div>
    <button className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#5c6f62] shadow-md transition-colors hover:text-[#af443c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27764b]" onClick={onRemove} type="button">
      <X className="size-4" /> Remove image</button>
  </div>;

  return <div className="rounded-3xl border-2 border-dashed border-[#bfdac4] bg-[#f7fbf7] p-5 transition-colors hover:border-[#6eaf7b] sm:p-8" onDragOver={(event) => event.preventDefault()} onDrop={onDrop}>
    <div className="flex min-h-[270px] flex-col items-center justify-center rounded-2xl bg-white/70 px-5 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-[#e3f3e6] text-[#2f8450]"><CloudUpload className="size-8" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-[#234b34]">Drop your waste photo here</h2>
      <p className="mt-2 text-sm text-[#809187]">or choose an image from your device</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#236d42] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b5935] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#236d42]" onClick={() => inputRef.current?.click()} type="button">
          <CloudUpload className="size-4" /> Choose a photo</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d3e5d6] bg-white px-5 py-3 text-sm font-semibold text-[#477058] transition-colors hover:border-[#91c49b] hover:bg-[#f3faf4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#236d42]" onClick={() => inputRef.current?.click()} type="button">
          <Camera className="size-4" /> Use camera</button>
      </div>
      <p className="mt-5 text-xs text-[#9aaa9e]">JPG, PNG or WEBP · Max 10 MB</p>
    </div>
    <label className="sr-only" htmlFor="waste-photo">Upload a waste photo</label>
    <input ref={inputRef} accept="image/*" capture="environment" className="sr-only" id="waste-photo" onChange={onChange} type="file" /></div>;
}
