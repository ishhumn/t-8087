import { ArrowRight, Bot, Building, Globe, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            TRANSFORMING BUSINESS
            <br />
            THROUGH AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-50">
            Empowering organizations with intelligent solutions that enhance the digital employee experience
            and drive innovation across industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center text-gray-900 mb-4">
            Why Choose AI-Solutions?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We deliver cutting-edge AI solutions that transform how businesses operate, 
            making technology work smarter for your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
              <Bot className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI-Powered Assistant</h3>
              <p className="text-gray-600">
                Advanced virtual assistance providing real-time support and intelligent solutions for your business needs.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
              <Building className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise Solutions</h3>
              <p className="text-gray-600">
                Scalable AI solutions designed to optimize operations and enhance productivity across your organization.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
              <Users className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Employee Experience</h3>
              <p className="text-gray-600">
                Creating seamless digital workplaces that empower employees and boost engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <Globe className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl font-mono font-bold text-white mb-6">Global Impact</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            We're committed to revolutionizing the workplace through AI innovation, 
            creating solutions that empower organizations worldwide to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold text-gray-900 mb-6">
                Leading the Future of Work
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Based in Sunderland, AI-Solutions is pioneering the next generation of workplace technology.
                Our innovative AI solutions are transforming how businesses operate, making digital transformation
                accessible and impactful for organizations of all sizes.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800">
                Discover More
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-slate-100 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 AI-Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-700">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;