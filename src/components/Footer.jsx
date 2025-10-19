const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Project Info */}
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-3">Project Information</h3>
            <p className="text-sm mb-2">
              <strong>Student:</strong> Mark Stevens
            </p>
            <p className="text-sm mb-2">
              <strong>Course:</strong> INF680 - Data Communications
            </p>
            <p className="text-sm mb-2">
              <strong>Date:</strong> October 2025
            </p>
            <p className="text-sm">
              <strong>Topic:</strong> CRC Error Checking Methodology
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            © 2025 Mark Stevens | Fort Hays State University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
