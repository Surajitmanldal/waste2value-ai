"use client";

import { useEffect, useState } from "react";
import { ImageUploader } from "@/components/ImageUploader";
import { Analysis, AnalysisResult } from "@/components/AnalysisResult";
import { Navbar } from "@/components/Navbar";
import { Leaf, Sparkles } from "@/components/Icons";

const mockAnalysis: Analysis = { name: "Mobile Phone Charger", category: "E-Waste", recyclable: true, materials: ["Plastic", "Copper", "Electronic components"], confidence: 94, disposalGuidance: "Take the charger to an authorized e-waste collection center. Do not place electronic chargers in regular household waste.", tips: ["Keep electronic waste separate from regular household waste.", "Use an authorized e-waste recycling center."] };

export default function AnalyzePage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<Analysis | null>(null);
  useEffect(() => () => { if (imageUrl) URL.revokeObjectURL(imageUrl); }, [imageUrl]);
  const handleImage = (file: File) => { if (imageUrl) URL.revokeObjectURL(imageUrl); setImageUrl(URL.createObjectURL(file)); setResult(null); };
  const reset = () => { if (imageUrl) URL.revokeObjectURL(imageUrl); setImageUrl(null); setResult(null); setIsAnalyzing(false); };
  const handleAnalyze = async () => { if (!imageUrl) return; setIsAnalyzing(true); await new Promise((resolve) => setTimeout(resolve, 1400)); setResult(mockAnalysis); setIsAnalyzing(false); };

  return <div className="min-h-screen bg-[#f8fbf8] text-[#183c2b]"><Navbar /><main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10"><div className="mx-auto max-w-3xl text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#e1f2e4] text-[#328353]"><Leaf className="size-6" /></div><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#398357]">Photo → analysis → action</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#183c2b] sm:text-6xl">Identify your waste.</h1><p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#718378] sm:text-lg">Upload a photo of an item you’re unsure about. We’ll give you an AI estimate and a clearer next step.</p></div><div className="mx-auto mt-12 max-w-3xl">{result ? <AnalysisResult onReset={reset} result={result} /> : <div className="rounded-3xl border border-[#e0ebe1] bg-white p-4 shadow-[0_20px_50px_-35px_#2a6840] sm:p-7"><ImageUploader imageUrl={imageUrl} onImageSelect={handleImage} onRemove={reset} /><button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#236d42] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#236d42]/15 transition-all hover:bg-[#1b5935] disabled:cursor-not-allowed disabled:bg-[#c1d5c5] disabled:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#236d42]" disabled={!imageUrl || isAnalyzing} onClick={handleAnalyze} type="button">{isAnalyzing ? <><span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Analyzing your waste...</> : <><Sparkles className="size-4" /> Analyze waste</>}</button><p className="mt-4 text-center text-xs text-[#97a69b]">This is an AI estimate, not a guarantee. Always follow local recycling guidelines.</p></div>}</div></main></div>;
}
