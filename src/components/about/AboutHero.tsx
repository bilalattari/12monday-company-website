'use client';

export default function AboutHero() {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="relative py-20 bg-black min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="text-center">
          {/* About Us Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              About Us
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            A Mighty Team of Passionate Weirdos
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            We're passionate about building startups from scratch, specializing in mobile app development, web applications, and AI-powered solutions that drive business growth.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-2xl p-6 text-center border border-green-500/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
              {/* Green Vertical Line Between Cards */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-0.5 h-16 bg-green-500/50 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

