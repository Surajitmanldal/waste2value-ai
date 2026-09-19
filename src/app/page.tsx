import { HowItWorks } from "@/components/HowItWorks";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fbf8]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[#819188] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© 2025 Waste2Value. Better choices, made simple.</p>
        <p className="text-xs">AI estimates are for guidance. Check your local recycling rules.</p>
      </footer>
    </div>
  );
}
