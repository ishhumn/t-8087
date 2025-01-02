import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ImageCategory = "all" | "technology" | "people" | "projects";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: ImageCategory;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "AI Matrix Visualization",
    caption: "Advanced AI Pattern Recognition System",
    category: "technology"
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    alt: "Future Tech Workspace",
    caption: "Next-Generation AI Development Environment",
    category: "people"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Tech Infrastructure",
    caption: "AI-Powered Infrastructure Solutions",
    category: "technology"
  },
  {
    src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    alt: "Innovation Hub",
    caption: "AI-Solutions Innovation Center",
    category: "projects"
  },
  {
    src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    alt: "Project Architecture",
    caption: "Next-Gen Project Implementation",
    category: "projects"
  },
  {
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    alt: "Team Collaboration",
    caption: "Cross-functional Team Innovation",
    category: "people"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>("all");

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold text-white mb-4">
            Innovation Showcase
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our cutting-edge AI solutions and technological breakthroughs
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as ImageCategory)}
          >
            <SelectTrigger className="w-[200px] bg-white/10 text-white border-white/20">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="people">People</SelectItem>
              <SelectItem value="projects">Projects</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {image.alt}
                  </h3>
                  <p className="text-white/80">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
