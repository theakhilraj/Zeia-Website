import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import collectionMotherhood from "@/assets/collection-men.jpg";
import collectionWomen from "@/assets/collection-women.jpg";
import collectionEssentials from "@/assets/collection-essentials.jpg";

const collections = [
  {
    id: 1,
    name: "Motherhood",
    slug: "motherhood",
    description: "Celebrate the beautiful journey",
    image: collectionMotherhood,
  },
  {
    id: 2,
    name: "Women",
    slug: "women",
    description: "Elegant pieces with timeless appeal",
    image: collectionWomen,
  },
  {
    id: 3,
    name: "Essentials",
    slug: "essentials",
    description: "Wardrobe staples, elevated",
    image: collectionEssentials,
  },
];

const CollectionsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Our Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.slug}`}
              className={`group relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <p className="text-sm tracking-wider uppercase opacity-80 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {collection.name}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-150">
                    <span className="text-sm">Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
