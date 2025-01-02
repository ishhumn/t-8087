import { ArrowRight, Bot, Building, Globe, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3A]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            TRANSFORMING BUSINESS
            <br />
            THROUGH AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
            Empowering organizations with intelligent solutions that enhance the digital employee experience
            and drive innovation across industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-[#2A2F3A] text-white hover:bg-[#3A3F4A]">
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
      <section className="py-24 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center text-white mb-4">
            Why Choose AI-Solutions?
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            We deliver cutting-edge AI solutions that transform how businesses operate, 
            making technology work smarter for your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#2A2F3A] hover:bg-[#3A3F4A] transition-colors border border-gray-700">
              <Bot className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Assistant</h3>
              <p className="text-gray-300">
                Advanced virtual assistance providing real-time support and intelligent solutions for your business needs.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-[#2A2F3A] hover:bg-[#3A3F4A] transition-colors border border-gray-700">
              <Building className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Solutions</h3>
              <p className="text-gray-300">
                Scalable AI solutions designed to optimize operations and enhance productivity across your organization.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-[#2A2F3A] hover:bg-[#3A3F4A] transition-colors border border-gray-700">
              <Users className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Employee Experience</h3>
              <p className="text-gray-300">
                Creating seamless digital workplaces that empower employees and boost engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3A]">
        <div className="container mx-auto px-4 text-center">
          <Globe className="w-16 h-16 text-gray-300 mx-auto mb-8" />
          <h2 className="text-3xl font-mono font-bold text-white mb-6">Global Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to revolutionizing the workplace through AI innovation, 
            creating solutions that empower organizations worldwide to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold text-white mb-6">
                Leading the Future of Work
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Based in Sunderland, AI-Solutions is pioneering the next generation of workplace technology.
                Our innovative AI solutions are transforming how businesses operate, making digital transformation
                accessible and impactful for organizations of all sizes.
              </p>
              <Button className="bg-[#2A2F3A] hover:bg-[#3A3F4A] text-white">
                Discover More
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-[#2A2F3A] overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Innovation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 AI-Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
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