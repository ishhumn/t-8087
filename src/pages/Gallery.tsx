import Navbar from "@/components/Navbar";

const GalleryImage = ({ src, alt, caption }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <p className="text-white text-center px-4">{caption}</p>
    </div>
  </div>
);

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "AI Innovation",
      caption: "Our AI Innovation Lab"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Tech Infrastructure",
      caption: "State-of-the-art Infrastructure"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Development",
      caption: "Development in Progress"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Coding",
      caption: "Our Development Team at Work"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Team Collaboration",
      caption: "Team Collaboration Session"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Project Planning",
      caption: "Strategic Project Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Take a visual journey through our workspace, team, and achievements.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;