const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Project Info */}
          <div className="text-center">
            <h3 className="text-fhsu-gold font-semibold text-lg mb-3">Project Information</h3>
            <p className="text-sm mb-2">
              <strong className="text-fhsu-gold">Student:</strong> Mark Stevens
            </p>
            <p className="text-sm mb-2">
              <strong className="text-fhsu-gold">Course:</strong> INF680 - Data Communications
            </p>
            <p className="text-sm mb-2">
              <strong className="text-fhsu-gold">Date:</strong> October 2025
            </p>
            <p className="text-sm">
              <strong className="text-fhsu-gold">Topic:</strong> CRC Error Checking Methodology
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            © 2025 Mark Stevens | <span className="text-fhsu-gold">Fort Hays State University</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
