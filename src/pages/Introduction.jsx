import { BookOpen, Shield } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Introduction to CRC
        </h1>

        {/* What is CRC */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">What is CRC?</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              <strong>Cyclic Redundancy Check (CRC)</strong> is a method used to detect errors in data [1]. 
              When we send data over a network or store it on a device, sometimes bits can get flipped 
              or corrupted. CRC helps us figure out if that happened.
            </p>
            
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-4">
              <p className="text-gray-700">
                <strong>Simple Explanation:</strong> Think of CRC like adding up all the numbers in your 
                data to get a total. You send both the data and the total. When it arrives, the receiver 
                adds up the numbers again. If the totals match, the data is probably okay!
              </p>
            </div>

            <p className="text-gray-700">
              CRC uses polynomial division (kind of like long division) on binary data. The remainder 
              from this division is the "CRC value" that gets sent with the data.
            </p>
          </div>
        </section>

        {/* Why CRC Matters */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Why is CRC Important?</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              CRC is one of the most widely used error detection methods because [1]:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>It catches most types of errors</li>
              <li>It's simple to implement in hardware</li>
              <li>It doesn't add much extra data (low overhead)</li>
              <li>It's very fast to calculate</li>
            </ul>

            <p className="text-gray-700">
              CRC is used in Ethernet networks, WiFi, hard drives, USB connections, and many other 
              technologies we use every day.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief History</h2>
            
            <p className="text-gray-700 mb-4">
              CRC was developed in 1961 to help detect errors in data transmission. As computers and 
              networks became more common in the 1970s and 1980s, CRC became a standard method for 
              error checking.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Key Milestones:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1961:</strong> CRC algorithm developed</li>
                <li><strong>1980s:</strong> Adopted by Ethernet (IEEE 802.3)</li>
                <li><strong>Today:</strong> Used in almost all digital communications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detection vs Correction */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detection vs. Correction</h2>
            
            <p className="text-gray-700 mb-4">
              It's important to understand that CRC can <strong>detect</strong> errors but cannot 
              <strong> correct</strong> them. If CRC finds an error, the receiver typically asks for 
              the data to be sent again.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">CRC Can Do:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Detect if errors occurred</li>
                  <li>✓ Tell you data is corrupted</li>
                  <li>✓ Work very quickly</li>
                </ul>
              </div>
              <div className="border-2 border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-700 mb-2">CRC Cannot Do:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Fix the errors</li>
                  <li>✗ Tell you which bits are wrong</li>
                  <li>✗ Guarantee 100% detection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #0d9488, #0f766e)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Ready to Learn More?</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Now that you understand what CRC is, let's see how it actually works!
          </p>
          <Link
            to="/how-it-works"
            style={{backgroundColor: '#ffffff', color: '#0f766e'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-md"
          >
            Continue to How It Works →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
