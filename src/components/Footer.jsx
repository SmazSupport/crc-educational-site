import { Github, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Project Information</h3>
            <p className="text-sm mb-2">
              <strong>Student:</strong> Mark [Last Name]
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center space-x-2">
                  <BookOpen size={16} />
                  <span>Course Textbook</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center space-x-2">
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">About This Site</h3>
            <p className="text-sm">
              This educational website was created as an undergraduate project for INF680. 
              It provides an in-depth exploration of Cyclic Redundancy Check (CRC) error 
              detection methodology used in data communications.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            © 2025 Mark Stevens | Fort Hays State University | 
            Created with React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
