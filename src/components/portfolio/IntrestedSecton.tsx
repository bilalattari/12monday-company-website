import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InterestedSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/intrested.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02654F]/30"></div>

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Interested in Similar Work?
        </h2>

        <p className="text-white/80 text-lg mb-10">
          Let&apos;s discuss how we can help bring your project to life with our expert
          development team.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 
            px-6 py-3 rounded-xl backdrop-blur-md transition-all hover:bg-white/20"
        >
          Start Your Project
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
