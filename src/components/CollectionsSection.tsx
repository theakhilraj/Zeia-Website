import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import collectionMotherhood from "@/assets/collection-mom.png";
import collectionWomen from "@/assets/collection-women.png";
import collectionEssentials from "@/assets/collection-essentials.png";

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

// Export for reuse
export { collections };

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
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <React.Fragment key={collection.id}>
              <Link
                to={`/collection/${collection.slug}`}
                className={`group relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${isVisible
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
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-background">
                  <p className="text-sm tracking-wider uppercase opacity-80 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg md:text-2xl font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {collection.name}
                    </h3>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-150">
                      <span className="text-xs md:text-sm">Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* All Products Card - appears after Essentials (index 2) */}
              {index === 2 && (
                <Link
                  to="/collection/all"
                  className={`group relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-lg md:text-2xl font-medium mb-1 md:mb-2">All Products</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Browse everything</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-lg transition-colors" />
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
