import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calculator, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CRC Error Checking
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              Cyclic Redundancy Check Methodology
            </p>
            <p className="text-lg mb-8 text-primary-50">
              An Educational Exploration of Error Detection in Data Communications
            </p>
            
            {/* Student Info - Prominently Displayed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg mb-2">
                <strong>Created by:</strong> Mark Stevens
              </p>
              <p className="text-lg mb-2">
                <strong>Course:</strong> INF680 - Data and Computer Communications
              </p>
              <p className="text-lg">
                <strong>Date:</strong> October 2025
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/introduction"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors border-2 border-white"
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
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Understanding CRC
            </h3>
            <p className="text-gray-600">
              Learn the fundamentals of Cyclic Redundancy Check, including its mathematical 
              foundation using polynomial division and binary operations.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              How It Works
            </h3>
            <p className="text-gray-600">
              Explore the step-by-step process of CRC calculation, from selecting generator 
              polynomials to computing check values and detecting errors.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Real-World Applications
            </h3>
            <p className="text-gray-600">
              Discover how CRC is used in Ethernet, WiFi, storage systems, and countless 
              other technologies to ensure data integrity.
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
                Why CRC Error Checking Matters
              </h2>
              <p className="text-gray-600 mb-4">
                In modern data communications, ensuring data integrity is critical. 
                CRC (Cyclic Redundancy Check) is one of the most widely used error 
                detection methods because of its:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>High reliability</strong> - Detects burst errors and multiple bit errors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Efficiency</strong> - Simple hardware implementation with low overhead
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Widespread adoption</strong> - Used in Ethernet, USB, storage, and more
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    <strong>Mathematical foundation</strong> - Based on polynomial algebra
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500 mb-1">Error Detection Rate</p>
                  <p className="text-2xl font-bold text-gray-800">99.9%+</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-sm text-gray-500 mb-1">Common Polynomial Sizes</p>
                  <p className="text-2xl font-bold text-gray-800">8, 16, 32 bits</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
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
          <Link to="/introduction" className="card hover:border-primary-600 border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Introduction</h3>
            <p className="text-gray-600 mb-4">
              Learn what CRC is, its history, and why it's important in data communications.
            </p>
            <span className="text-primary-600 font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/how-it-works" className="card hover:border-primary-600 border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How It Works</h3>
            <p className="text-gray-600 mb-4">
              Dive deep into the mathematics and step-by-step process of CRC calculation.
            </p>
            <span className="text-primary-600 font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/applications" className="card hover:border-primary-600 border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Applications</h3>
            <p className="text-gray-600 mb-4">
              Discover real-world uses of CRC in networking, storage, and communications.
            </p>
            <span className="text-primary-600 font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/calculator" className="card hover:border-primary-600 border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">CRC Calculator</h3>
            <p className="text-gray-600 mb-4">
              Try our interactive calculator to see CRC in action with your own data.
            </p>
            <span className="text-primary-600 font-semibold inline-flex items-center">
              Try It <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>

          <Link to="/references" className="card hover:border-primary-600 border-2 border-transparent transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">References</h3>
            <p className="text-gray-600 mb-4">
              View all sources and citations used in creating this educational resource.
            </p>
            <span className="text-primary-600 font-semibold inline-flex items-center">
              View Sources <ArrowRight className="ml-2" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
