import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Content for the Contact page will go here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;