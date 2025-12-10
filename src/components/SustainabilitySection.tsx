import { Leaf, Heart, Recycle, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Leaf,
    title: "Organic Fabrics",
    description: "GOTS certified organic cotton and natural fibers that are gentle on your skin and the planet.",
  },
  {
    icon: Heart,
    title: "Ethical Production",
    description: "Fair wages and safe working conditions for every person who helps create our garments.",
  },
  {
    icon: Recycle,
    title: "Minimal Waste",
    description: "Zero-waste pattern cutting and recycled packaging to minimize our environmental footprint.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Quality",
    description: "Timeless designs and durable construction that transcend seasonal trends.",
  },
];

const SustainabilitySection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className="section-padding bg-foreground text-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-background/60 mb-4">
            Our Values
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Sustainably Crafted
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-background/20 mb-6">
                <value.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
