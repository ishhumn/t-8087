import Navbar from "@/components/Navbar";
import { Bot, Cpu, LineChart, Users, Code, Shield } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all bg-white">
    <Icon className="w-12 h-12 text-gray-700 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "AI-Powered Virtual Assistant",
      description: "Advanced conversational AI that provides real-time support, answers queries, and streamlines communication across your organization.",
      icon: Bot
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate routine tasks and workflows with AI-driven solutions that learn and adapt to your business processes.",
      icon: Cpu
    },
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning algorithms to analyze data patterns and make informed business decisions.",
      icon: LineChart
    },
    {
      title: "Employee Experience Platform",
      description: "Create a seamless digital workplace experience with AI-powered tools and insights.",
      icon: Users
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed to address your specific business challenges and objectives.",
      icon: Code
    },
    {
      title: "AI Security & Compliance",
      description: "Ensure your AI implementations are secure, ethical, and compliant with industry standards.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            We offer a comprehensive suite of AI-powered solutions designed to transform your business operations and enhance employee productivity.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;