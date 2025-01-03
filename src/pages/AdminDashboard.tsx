import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ContactMessage {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  company: string;
  message: string;
  timestamp: string;
}

const AdminDashboard = () => {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalReviews: 0,
    totalEvents: 0,
  });

  useEffect(() => {
    // Load data from localStorage
    const loadData = () => {
      const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      const events = JSON.parse(localStorage.getItem("eventRegistrations") || "[]");

      setContactMessages(messages);
      setStats({
        totalContacts: messages.length,
        totalReviews: reviews.length,
        totalEvents: events.length,
      });
    };

    loadData();
    // Update data every 5 seconds
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartData = [
    { name: "Contact Inquiries", value: stats.totalContacts },
    { name: "Reviews", value: stats.totalReviews },
    { name: "Event Registrations", value: stats.totalEvents },
  ];

  return (
    <div className="min-h-screen bg-[#221F26] text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-slate-800 text-white">
          <CardHeader>
            <CardTitle>Total Contact Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{stats.totalContacts}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 text-white">
          <CardHeader>
            <CardTitle>Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{stats.totalReviews}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 text-white">
          <CardHeader>
            <CardTitle>Total Event Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{stats.totalEvents}</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Chart */}
      <Card className="bg-slate-800 text-white mb-8">
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Contact Inquiries List */}
      <Card className="bg-slate-800 text-white">
        <CardHeader>
          <CardTitle>Recent Contact Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full">
            {contactMessages.map((message, index) => (
              <div
                key={index}
                className="mb-6 p-4 bg-slate-700 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{message.fullName}</h3>
                  <span className="text-sm text-gray-400">
                    {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2 text-sm">
                  <p><span className="text-gray-400">Email:</span> {message.email}</p>
                  <p><span className="text-gray-400">Phone:</span> {message.phoneNumber}</p>
                  <p><span className="text-gray-400">Country:</span> {message.country}</p>
                  <p><span className="text-gray-400">Company:</span> {message.company}</p>
                </div>
                <p className="text-gray-300 mt-2 text-sm">{message.message}</p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;