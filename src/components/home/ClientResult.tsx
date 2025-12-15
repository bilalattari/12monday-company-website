// Server Component
export default function ClientResults() {
  const testimonials = [
    {
      title: "Transformative Impact with NexaAI’s Automation Suite",
      text: "NexaAI has revolutionized our operations—in just weeks, we slashed manual workload by 60% and gained clarity into performance metrics we never had before.",
      name: "Sarah Johnson",
      role: "COO, TechFlow Innovations",
      avatar: "/avatars/avatar1.png",
    },
    {
      title: "Unmatched Insight from NexaAI’s Analytics Dashboard",
      text: "With NexaAI, we moved from gut-feels to data-driven decisions. The realtime insights uncovered new growth channels, and our campaign ROI improved by 45% in the first month.",
      name: "David Lee",
      role: "Head of Marketing, BrightWave Media",
      avatar: "/avatars/avatar2.png",
    },
    {
      title: "Seamless Integration, Instant Results",
      text: "Integrating NexaAI into our legacy systems was effortless. Within days we automated critical workflows, reduced errors, and freed our team to focus on strategic initiatives.",
      name: "Priya Kumar",
      role: "VP of Operations, Meridian Financial",
      avatar: "/avatars/avatar3.png",
    },
    {
      title: "Scalable AI That Grows with Us",
      text: "As a fast-growing startup, we needed an AI platform that could scale. NexaAI’s modular system expanded alongside our business—delivering enterprise-grade features.",
      name: "Carlos Ramirez",
      role: "CEO, NovaSolutions",
      avatar: "/avatars/avatar4.png",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Real Results from <span className="text-emerald-400">our Clients</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how leading businesses optimize performance, automate workflows,
          and achieve transformative growth with NexaAI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-14">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#096849] border border-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-xl text-white mb-3">
              {t.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{t.text}</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={t.avatar} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
