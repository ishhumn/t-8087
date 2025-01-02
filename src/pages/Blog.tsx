import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "1",
    title: "The Rise of Explainable AI (XAI)",
    excerpt: "Understanding how AI makes decisions is becoming crucial for business adoption. Explore how XAI is making AI systems more transparent and trustworthy.",
    date: "Mar 15, 2024",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    content: "Full blog content here..."
  },
  {
    id: "2",
    title: "Generative AI in Creative Industries",
    excerpt: "How generative AI is revolutionizing art, design, and content creation while raising important questions about creativity and authorship.",
    date: "Mar 14, 2024",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    content: "Full blog content here..."
  },
  {
    id: "3",
    title: "AI in Healthcare: Revolutionizing Diagnostics",
    excerpt: "Exploring how AI is transforming medical diagnosis, improving accuracy, and helping healthcare professionals make better decisions.",
    date: "Mar 13, 2024",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content: "Full blog content here..."
  },
  {
    id: "4",
    title: "The Ethics of AI Development",
    excerpt: "Diving deep into the ethical considerations and challenges faced when developing AI systems that impact human lives.",
    date: "Mar 12, 2024",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    content: "Full blog content here..."
  },
  {
    id: "5",
    title: "Future of Work: AI Collaboration",
    excerpt: "How AI is reshaping workplace dynamics and creating new opportunities for human-AI collaboration across industries.",
    date: "Mar 11, 2024",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    content: "Full blog content here..."
  },
  {
    id: "6",
    title: "AI-Powered Cybersecurity",
    excerpt: "Examining how AI is strengthening cybersecurity measures and protecting organizations from evolving digital threats.",
    date: "Mar 10, 2024",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    content: "Full blog content here..."
  }
];

const BlogCard = ({ id, title, excerpt, date, readTime, image }) => (
  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {readTime} min read
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <Link 
        to={`/blog/${id}`} 
        className="inline-flex items-center text-blue-400 hover:text-blue-300"
      >
        Read More <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Insights and updates from the cutting edge of AI technology and digital transformation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
