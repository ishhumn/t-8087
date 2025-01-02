import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in Sunderland, AI-Solutions emerged from a vision to revolutionize how businesses interact with artificial intelligence. Our journey began with a simple yet powerful idea: to make advanced AI technology accessible, practical, and transformative for businesses of all sizes.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to pioneering the future of digital workplace solutions through innovative AI integration. Our mission is to enhance human capabilities, not replace them, by providing intelligent tools that streamline workflows, boost productivity, and foster creativity.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where AI technology seamlessly integrates into every aspect of the workplace, empowering employees to achieve their full potential while driving business growth and innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed">
                At AI-Solutions, we combine cutting-edge artificial intelligence with human-centered design principles. Our solutions are built on three core pillars:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Innovation in AI Technology</li>
                <li>User-Centric Design</li>
                <li>Continuous Learning and Adaptation</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800">Our Impact</h2>
              <p className="text-gray-600 leading-relaxed">
                We've helped numerous organizations transform their operations through AI integration, resulting in:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>40% increase in employee productivity</li>
                <li>60% reduction in routine task completion time</li>
                <li>85% improvement in problem resolution speed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;