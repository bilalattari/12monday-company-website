'use client';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Our Services Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
              Our Services
            </button>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Services We Provide with
          </h1>
          
          {/* Sub-heading in Green */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#17C381] mb-12">
            Get Benefited.
          </h2>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
