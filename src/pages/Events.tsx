import { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  image: string;
}

interface Registration {
  eventId: string;
  name: string;
  email: string;
  address: string;
  ticketType: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const Events = () => {
  const { toast } = useToast();
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    ticketType: "standard"
  });

  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "AI in Healthcare Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Sunderland Technology Hub",
      description: "Join us for a day of exploring how AI is transforming healthcare with industry experts and innovative demonstrations.",
      capacity: 100,
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: "2",
      title: "Machine Learning Workshop",
      date: "April 2, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "AI-Solutions HQ",
      description: "Hands-on workshop covering the latest ML techniques and their practical applications in business.",
      capacity: 50,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: "3",
      title: "Future of Work Conference",
      date: "May 20, 2024",
      time: "9:30 AM - 4:30 PM",
      location: "Sunderland Conference Center",
      description: "Explore how AI is shaping the future of work and digital employee experience.",
      capacity: 150,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ]);

  const handleRegister = (eventId: string) => {
    setSelectedEventId(eventId);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedEventId) {
      toast({
        title: "Error",
        description: "Please select an event first.",
        variant: "destructive",
      });
      return;
    }

    const registration: Registration = {
      eventId: selectedEventId,
      ...formData,
      registrationDate: new Date().toISOString(),
      status: 'pending'
    };

    const registrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    localStorage.setItem('eventRegistrations', JSON.stringify([...registrations, registration]));

    setFormData({
      name: "",
      email: "",
      address: "",
      ticketType: "standard"
    });
    setSelectedEventId("");

    toast({
      title: "Success",
      description: "Your registration has been submitted for review.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Upcoming Events</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for exciting events where we explore the latest in AI technology
            and its impact on various industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.capacity} seats</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <Button 
                  onClick={() => handleRegister(event.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Event Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <select
                  value={formData.ticketType}
                  onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-md px-3 py-2"
                  required
                >
                  <option value="standard">Standard Ticket</option>
                  <option value="vip">VIP Ticket</option>
                  <option value="group">Group Ticket</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
