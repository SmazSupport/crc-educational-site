import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calculator, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{background: 'linear-gradient(to bottom right, #000000, #333333)'}} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 style={{color: '#ffffff'}} className="text-5xl md:text-6xl font-bold mb-6">
              Catching Data Errors with CRC
            </h1>
            <p style={{color: '#ffffff'}} className="text-xl md:text-2xl mb-4">
              How Networks Keep Your Data Intact
            </p>
            <p style={{color: '#ffffff'}} className="text-lg mb-8">
              A practical look at error detection in data communications
            </p>
            
            {/* Student Info - Prominently Displayed */}
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.4)'}} className="backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8 border-2">
              <p style={{color: '#ffffff'}} className="text-lg mb-2">
                <strong>Created by:</strong> Mark Stevens
              </p>
              <p style={{color: '#ffffff'}} className="text-lg mb-2">
                <strong>Course:</strong> INF680 - Data and Computer Communications
              </p>
              <p style={{color: '#ffffff'}} className="text-lg">
                <strong>Date:</strong> October 2025
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/introduction"
                style={{backgroundColor: '#F6BE00', color: '#000000'}}
                className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/calculator"
                style={{backgroundColor: '#000000', color: '#F6BE00'}}
                className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg hover:bg-gray-800 transition-colors border-2 border-fhsu-gold shadow-md"
              >
                Try CRC Calculator
                <Calculator className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What You'll Learn
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-fhsu-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              What CRC Is and Why It Matters
            </h3>
            <p className="text-gray-600">
              This section explains how CRC works, from polynomial division mathematics to XOR operations, 
              and why it is the standard error detection method for systems ranging from Ethernet to USB drives.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="text-fhsu-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              The Mechanics Behind It
            </h3>
            <p className="text-gray-600">
              This section covers the complete process: selecting a generator polynomial, executing the division, 
              attaching the check value, and performing verification at the receiver.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="text-fhsu-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Where You'll Find It
            </h3>
            <p className="text-gray-600">
              CRC operates in the background of nearly every digital system in use today, including WiFi, 
              hard drives, USB connections, and ZIP files. This section examines its real-world applications.
            </p>
          </div>
        </div>
      </div>

      {/* Why CRC Matters Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Why CRC Is Everywhere
              </h2>
              <p className="text-gray-600 mb-4">
                Data corruption occurs frequently due to electrical noise, physical disk damage, and radio interference. 
                CRC detects these errors before they cause problems. It became the standard because it:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Catches what matters</strong> including burst errors, bit flips, and most corruption patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Runs fast</strong> with simple circuits calculating it at wire speed with minimal overhead
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Battle-tested</strong> through decades of use in Ethernet, USB, WiFi, and storage systems
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Solid math</strong> as polynomial algebra provides predictable, reliable behavior
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-fhsu-gold pl-4">
                  <p className="text-sm text-gray-500 mb-1">Error Detection Rate</p>
                  <p className="text-2xl font-bold text-gray-800">99.9%+</p>
                </div>
                <div className="border-l-4 border-fhsu-gold pl-4">
                  <p className="text-sm text-gray-500 mb-1">Common Polynomial Sizes</p>
                  <p className="text-2xl font-bold text-gray-800">8, 16, 32 bits</p>
                </div>
                <div className="border-l-4 border-fhsu-gold pl-4">
                  <p className="text-sm text-gray-500 mb-1">First Developed</p>
                  <p className="text-2xl font-bold text-gray-800">1961</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore the Topics
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/introduction" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Introduction</h3>
            <p className="text-gray-600 mb-4">
              What CRC does, why it became the standard, and how it fits into the bigger picture of data integrity.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/how-it-works" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How It Works</h3>
            <p className="text-gray-600 mb-4">
              The step-by-step workflow including generator polynomials, XOR division, and check value verification.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/applications" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Applications</h3>
            <p className="text-gray-600 mb-4">
              Real-world applications of CRC in Ethernet, WiFi, hard drives, USB, and other systems.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/calculator" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">CRC Calculator</h3>
            <p className="text-gray-600 mb-4">
              Interactive tool to process custom data through the CRC algorithm with step-by-step XOR division visualization.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Try It <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/references" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">References</h3>
            <p className="text-gray-600 mb-4">
              All the technical references and standards cited throughout this site.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              View Sources <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
