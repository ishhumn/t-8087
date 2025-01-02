const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">AI-Solutions</h3>
            <p className="text-gray-400">
              Innovating the future of digital employee experience through AI-powered solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Sunderland Technology Hub<br />
              Email: info@ai-solutions.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 AI-Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
