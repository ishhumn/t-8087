import Navbar from "@/components/Navbar";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, excerpt, date, readTime, image }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {readTime} min read
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
        Read More <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
);

const Blog = () => {
  const blogs = [
    {
      title: "The Future of AI in the Workplace",
      excerpt: "Explore how artificial intelligence is reshaping the modern workplace and what it means for employee productivity.",
      date: "Mar 15, 2024",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Implementing AI Solutions: A Practical Guide",
      excerpt: "Learn the step-by-step process of integrating AI solutions into your existing business infrastructure.",
      date: "Mar 12, 2024",
      readTime: 7,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "AI Ethics and Responsibility",
      excerpt: "Understanding the importance of ethical AI implementation and its impact on society.",
      date: "Mar 10, 2024",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Insights and updates from the world of AI and digital transformation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;