import Link from "next/link";
import { Leaf } from "./Icons";

export function Navbar() {
  return (
    <header className="relative z-10 border-b border-emerald-950/8 bg-[#f8fbf8]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-2.5 text-[#183c2b]" href="/">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#d9f1df] text-[#27764b]"><Leaf className="size-5" /></span>
          <span className="font-semibold tracking-[-0.03em]">Waste<span className="text-[#27804d]">2</span>Value</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 text-sm font-medium text-[#63766c] sm:gap-3">
          <Link className="rounded-full px-3 py-2 transition-colors hover:bg-[#e7f4e9] hover:text-[#1c5c38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27804d]" href="/">Home</Link>
          <Link className="rounded-full bg-[#e4f3e7] px-4 py-2 text-[#1f6940] transition-colors hover:bg-[#d5edda] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27804d]" href="/analyze">Identify Waste</Link>
        </nav>
      </div>
    </header>
  );
}
