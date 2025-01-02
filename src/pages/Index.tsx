import { ArrowRight, Bot, Cpu, Globe, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            AI-POWERED
            <br />
            SOLUTIONS
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            Leveraging artificial intelligence to transform the digital employee experience
            and accelerate innovation across industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center text-blue-600 mb-16">
            Why Choose AI-Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Bot className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Assistant</h3>
              <p className="text-gray-600">
                Our virtual assistant provides instant support and guidance for all your needs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
              <p className="text-gray-600">
                Accelerate your development cycle with AI-based prototyping solutions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Employee Experience</h3>
              <p className="text-gray-600">
                Enhance workplace productivity with our digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Globe className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl font-mono font-bold text-white mb-6">Our Global Mission</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're committed to innovating, promoting, and delivering the future of digital employee
            experience worldwide. Our solutions are designed to support people at work and make a
            lasting global impact.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold text-blue-600 mb-6">
                Innovating for the Future
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Based in Sunderland, AI-Solutions is at the forefront of technological innovation,
                providing cutting-edge AI solutions that transform how businesses operate and
                employees work.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-blue-100 overflow-hidden">
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
      <footer className="bg-white border-t border-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-600 mb-4 md:mb-0">
              © 2024 AI-Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
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