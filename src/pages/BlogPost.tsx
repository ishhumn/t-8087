import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch this data from an API
  const blog = {
    title: "The Rise of Explainable AI (XAI)",
    date: "Mar 15, 2024",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    content: `
      <p>Explainable AI (XAI) is becoming increasingly important as AI systems are deployed in critical applications across industries. This article explores the key concepts, challenges, and solutions in making AI systems more transparent and interpretable.</p>
      
      <h2>Why XAI Matters</h2>
      <p>As AI systems become more complex and are used to make important decisions, understanding how these systems arrive at their conclusions is crucial for:</p>
      <ul>
        <li>Building trust with users and stakeholders</li>
        <li>Meeting regulatory requirements</li>
        <li>Debugging and improving AI models</li>
        <li>Ensuring ethical decision-making</li>
      </ul>
      
      <h2>Key Approaches in XAI</h2>
      <p>Several techniques have emerged to make AI systems more explainable:</p>
      <ul>
        <li>LIME (Local Interpretable Model-agnostic Explanations)</li>
        <li>SHAP (SHapley Additive exPlanations)</li>
        <li>Attention mechanisms in neural networks</li>
        <li>Decision trees and rule-based systems</li>
      </ul>
      
      <h2>The Future of XAI</h2>
      <p>As AI continues to evolve, XAI will play an increasingly important role in ensuring that AI systems remain accountable, transparent, and trustworthy. This is essential for the widespread adoption of AI across industries.</p>
    `
  };

  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {blog.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {blog.readTime} min read
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-8">{blog.title}</h1>
            
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
