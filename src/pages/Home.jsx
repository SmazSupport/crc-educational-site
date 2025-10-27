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
              We break down how CRC works — from the polynomial division math to the XOR operations — 
              and why it's the go-to error detection method for everything from Ethernet to USB drives.
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
              Walk through the actual process: picking a generator polynomial, running the division, 
              attaching the check value, and verifying on the other end. It's simpler than it sounds.
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
              CRC runs in the background of almost every digital system you use — your WiFi, 
              hard drives, USB connections, even ZIP files. See where it's doing quality control in the real world.
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
                Data gets corrupted all the time — electrical noise, scratched disks, radio interference. 
                CRC is how we catch those errors before they cause problems. It's the standard because it:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Catches what matters</strong> — burst errors, bit flips, most corruption patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Runs fast</strong> — simple circuits calculate it at wire speed with minimal overhead
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Battle-tested</strong> — decades of use in Ethernet, USB, WiFi, storage systems
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fhsu-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Solid math</strong> — polynomial algebra gives it predictable, reliable behavior
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
              The step-by-step workflow: generator polynomials, XOR division, and how the check value gets verified.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/applications" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Applications</h3>
            <p className="text-gray-600 mb-4">
              Where CRC runs in the real world — Ethernet, WiFi, hard drives, USB, and more.
            </p>
            <span className="text-fhsu-gold font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/calculator" className="card hover:border-fhsu-gold border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">CRC Calculator</h3>
            <p className="text-gray-600 mb-4">
              Run your own data through the CRC process and watch the XOR division happen step-by-step.
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
