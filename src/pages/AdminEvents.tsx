import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

interface Registration {
  eventId: string;
  name: string;
  email: string;
  address: string;
  ticketType: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const AdminEvents = () => {
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const storedRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    setRegistrations(storedRegistrations);
  }, []);

  const handleStatusUpdate = (index: number, newStatus: 'approved' | 'rejected') => {
    const updatedRegistrations = [...registrations];
    updatedRegistrations[index].status = newStatus;
    setRegistrations(updatedRegistrations);
    localStorage.setItem('eventRegistrations', JSON.stringify(updatedRegistrations));
    
    toast({
      title: "Status Updated",
      description: `Registration ${newStatus} successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">Event Registrations</h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-gray-300">Name</th>
                  <th className="px-6 py-4 text-left text-gray-300">Email</th>
                  <th className="px-6 py-4 text-left text-gray-300">Address</th>
                  <th className="px-6 py-4 text-left text-gray-300">Ticket Type</th>
                  <th className="px-6 py-4 text-left text-gray-300">Registration Date</th>
                  <th className="px-6 py-4 text-left text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-6 py-4 text-gray-300">{registration.name}</td>
                    <td className="px-6 py-4 text-gray-300">{registration.email}</td>
                    <td className="px-6 py-4 text-gray-300">{registration.address}</td>
                    <td className="px-6 py-4 text-gray-300">{registration.ticketType}</td>
                    <td className="px-6 py-4 text-gray-300">
                      {new Date(registration.registrationDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        registration.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                        registration.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {registration.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleStatusUpdate(index, 'approved')}
                          variant="outline"
                          className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/30"
                          disabled={registration.status === 'approved'}
                        >
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleStatusUpdate(index, 'rejected')}
                          variant="outline"
                          className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/30"
                          disabled={registration.status === 'rejected'}
                        >
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminEvents;
