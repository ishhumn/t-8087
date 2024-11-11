import { Database, Server, Network, Users, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-hero-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            OPEN SOURCE
            <br />
            DATABASE
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            The leading cloud database service on the market, with unmatched data
            distribution and mobility across AWS, Azure, and Google Cloud.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center">
            /CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Clustering"
              description="Horizontal scalability with built-in auto-sharding to millions of nodes with automatic, synchronous replication for high availability."
              icon={Database}
            />
            <FeatureCard
              title="Persistence"
              description="Keeps the dataset in memory for fast access, but can persist writes to permanent storage to survive reboots and system failures."
              icon={Server}
            />
            <FeatureCard
              title="Data structures"
              description="Well-known as a 'data structure server', supports lists, sets, sorted sets, hashes, bit arrays and more. Fast and efficient."
              icon={Network}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12">
            /COMMUNITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">50K+</h3>
              <p className="text-blue-100">Active Developers</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">1M+</h3>
              <p className="text-blue-100">Lines of Code</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100+</h3>
              <p className="text-blue-100">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold mb-6">/INTEGRATE</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seamlessly integrate with your existing tech stack using our comprehensive API and extensive documentation. Support for multiple programming languages and frameworks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p>RESTful API endpoints</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p>WebSocket support</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p>GraphQL integration</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Code on screen"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-background to-black/95">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-12">/TEAM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Enterprise Support</h3>
              <p className="text-muted-foreground">24/7 dedicated team support</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Robot"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">Advanced ML capabilities</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Technology"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
              <p className="text-muted-foreground">Latest tech implementation</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Smart living"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Smart Solutions</h3>
              <p className="text-muted-foreground">Intelligent automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 MaxData Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
