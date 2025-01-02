import Navbar from "@/components/Navbar";
import { Award, Building2, Globe2, Users2 } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">About AI-Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of workplace technology through innovative AI solutions
              that transform how businesses operate and employees work.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#2A2F3A] p-8 rounded-xl shadow-lg border border-gray-700">
                <Building2 className="w-8 h-8 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
                <p className="text-gray-300 leading-relaxed">
                  Founded in Sunderland with a vision to revolutionize workplace technology,
                  AI-Solutions emerged from a deep understanding of the challenges modern
                  businesses face. Our journey began with a simple yet powerful mission:
                  to make advanced AI technology accessible and transformative for
                  organizations of all sizes.
                </p>
              </div>
              
              <div className="bg-[#2A2F3A] p-8 rounded-xl shadow-lg border border-gray-700">
                <Globe2 className="w-8 h-8 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  We are dedicated to pioneering the future of digital workplace solutions
                  through innovative AI integration. Our mission is to enhance human
                  capabilities by providing intelligent tools that streamline workflows,
                  boost productivity, and foster creativity in the modern workplace.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-[#2A2F3A] p-8 rounded-xl shadow-lg border border-gray-700">
                <Users2 className="w-8 h-8 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-4">Our Approach</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At AI-Solutions, we combine cutting-edge artificial intelligence with
                  human-centered design principles. Our solutions are built on three core pillars:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Innovation in AI Technology</li>
                  <li>User-Centric Design</li>
                  <li>Continuous Learning and Adaptation</li>
                </ul>
              </div>
              
              <div className="bg-[#2A2F3A] p-8 rounded-xl shadow-lg border border-gray-700">
                <Award className="w-8 h-8 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-4">Our Impact</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our solutions have helped numerous organizations transform their operations
                  through AI integration, resulting in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>40% increase in employee productivity</li>
                  <li>60% reduction in routine task completion time</li>
                  <li>85% improvement in problem resolution speed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;