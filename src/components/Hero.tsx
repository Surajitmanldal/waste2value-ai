import Link from "next/link";
import { ArrowUpRight, Camera, ChevronRight, Leaf, Sparkles } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-40 size-[520px] rounded-full bg-[#d9f4de]/70 blur-3xl" />
      <div className="pointer-events-none absolute left-[-16rem] top-32 size-[380px] rounded-full bg-[#f2eed6]/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-32">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9dec2] bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#27764b] shadow-sm">
            <Sparkles className="size-3.5" /> A clearer way to recycle
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#173b29] sm:text-6xl lg:text-[5.2rem]">Turn Waste<br /><span className="text-[#318457]">Into the Right</span><br />Action.</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#62766a] sm:text-xl">Snap a photo of everyday waste and get clear, practical guidance for what to do next — powered by thoughtful AI.</p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link className="group inline-flex items-center gap-3 rounded-full bg-[#226b41] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_#226b41] transition-all hover:-translate-y-0.5 hover:bg-[#1b5935] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#226b41]" href="/analyze">Identify My Waste <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#4b6758] transition-colors hover:text-[#226b41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#226b41]" href="#how-it-works">How It Works <ChevronRight className="size-4" /></a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-[#789083]"><span className="flex -space-x-2"><span className="size-7 rounded-full border-2 border-[#f8fbf8] bg-[#d2ead5]" /><span className="size-7 rounded-full border-2 border-[#f8fbf8] bg-[#bcdac2]" /><span className="size-7 rounded-full border-2 border-[#f8fbf8] bg-[#e6dcbf]" /></span><span>Small actions. Meaningful impact.</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px] animate-float lg:mt-2">
          <div className="absolute -left-5 top-16 z-10 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 text-xs font-semibold text-[#385c47] shadow-lg shadow-[#477c5a]/10 backdrop-blur"><span className="flex size-7 items-center justify-center rounded-lg bg-[#e3f5e7] text-[#318457]"><Camera className="size-4" /></span>Photo in, clarity out</div>
          <div className="relative aspect-[.88] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-[#b9d9bf] shadow-2xl shadow-[#37674a]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,#f5f2d9_0,transparent_27%),linear-gradient(145deg,#d6e9d3,#7eb78d)]" />
            <div className="absolute -bottom-9 left-[-8%] size-[74%] rounded-full bg-[#6eaa7a]/80 blur-sm" />
            <div className="absolute bottom-[16%] left-[25%] h-[47%] w-[47%] rotate-[-16deg] rounded-[2rem] bg-[#f4f1df] shadow-[inset_-12px_-9px_0_#dfddc6,10px_18px_18px_#47745460]"><div className="absolute inset-x-5 top-5 h-2 rounded-full bg-[#d0d7bd]" /><div className="absolute bottom-6 left-5 right-5 flex justify-between"><span className="size-8 rounded-full bg-[#d8dcc4]" /><span className="h-8 w-3 rounded-full bg-[#d8dcc4]" /></div></div>
            <div className="absolute bottom-[9%] right-[9%] h-20 w-8 rotate-[-18deg] rounded-full bg-[#e3e1c9] shadow-lg" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/85 p-4 backdrop-blur"><div className="flex items-center justify-between"><span className="text-xs font-medium text-[#6d7f71]">AI analysis</span><span className="flex items-center gap-1 text-xs font-semibold text-[#27764b]"><span className="size-1.5 rounded-full bg-[#55af70]" /> Ready</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#dcebdd]"><div className="h-full w-[94%] rounded-full bg-[#4c9c63]" /></div></div>
          </div>
          <div className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-2xl border border-[#d2ead5] bg-white px-4 py-3 text-xs font-semibold text-[#315a41] shadow-lg shadow-[#477c5a]/10"><Leaf className="size-4 text-[#318457]" /> Better choices, made simple</div>
        </div>
      </div>
    </section>
  );
}
