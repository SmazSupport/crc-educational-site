import { Link } from 'react-router-dom';
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
              <BookOpen className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">What is CRC?</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              <strong>Cyclic Redundancy Check (CRC)</strong> is an error detection method used to identify data corruption before it causes problems (Stallings, 2013). 
              When data is transmitted over a network or written to a hard drive, bits can flip due to electrical noise, physical disk damage, or signal interference. 
              CRC serves as a quality-control checkpoint that indicates whether data has been corrupted during transmission or storage.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-fhsu-gold p-4 mb-4">
              <p className="text-gray-700">
                <strong>Analogy:</strong> Consider a warehouse shipping process where items are counted before departure and the total is recorded on a packing slip. 
                Upon arrival at the destination, the items are counted again. If the counts match, the shipment is intact. If not, something was lost in transit. 
                CRC operates on the same principle, but with data instead of physical items.
              </p>
            </div>

            <p className="text-gray-700">
              CRC uses polynomial division on binary data, similar to long division, 
              but with XOR operations instead of subtraction (Stallings, 2013). The remainder from that division becomes the "check value" 
              that is appended to the data.
            </p>
          </div>
        </section>

        {/* Why CRC Matters */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Why is CRC Important?</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              CRC is widely adopted because it provides an optimal balance between reliability and efficiency (Stallings, 2013; Newton, 2007):
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Catches most errors</strong> including burst errors and single-bit flips</li>
              <li><strong>Hardware-friendly</strong> with simple circuits that can calculate it in real-time</li>
              <li><strong>Low overhead</strong> requiring only a few extra bytes per transmission</li>
              <li><strong>Fast</strong> with calculations completing in microseconds, even on basic chips</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2">
                <strong>Practical Impact:</strong>
              </p>
              <p className="text-gray-700">
                Every WiFi connection, USB drive transfer, and Ethernet video stream relies on CRC running in the background to ensure data arrives intact. 
                This invisible quality-control layer maintains reliability across digital communications.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief History</h2>
            
            <p className="text-gray-700 mb-4">
              CRC was developed in 1961 when engineers needed a reliable method to detect transmission errors (Newton, 2007). 
              At that time, data lines were noisy and unreliable, with telegraph-era technology attempting to handle computer data. 
              As networks expanded rapidly in the 1970s and 1980s, CRC became the standard due to its proven effectiveness (Stallings, 2013).
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Key Milestones:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1961:</strong> CRC algorithm developed to provide error detection for early data links</li>
                <li><strong>1980s:</strong> Ethernet (IEEE 802.3) adopted CRC-32, becoming the backbone of office networks (IEEE Standards Association, 2018)</li>
                <li><strong>Today:</strong> Integrated into nearly every digital communication protocol</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detection vs Correction */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detection vs. Correction</h2>
            
            <p className="text-gray-700 mb-4">
              The key distinction is that CRC can <strong>detect</strong> errors, but it cannot <strong>fix</strong> them (Stallings, 2013). 
              Like a smoke detector that alerts to a problem without extinguishing the fire, CRC identifies corruption without repairing it. 
              When CRC detects an error, the system typically requests a retransmission (Cisco Systems, 2024).
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">What CRC Does:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Identifies when errors have occurred</li>
                  <li>✓ Flags corrupted data immediately</li>
                  <li>✓ Executes in microseconds</li>
                  <li>✓ Operates reliably across billions of transmissions</li>
                </ul>
              </div>
              <div className="border-2 border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-700 mb-2">What CRC Doesn't Do:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Repair the corrupted bits</li>
                  <li>✗ Tell you exactly which bits flipped</li>
                  <li>✗ Guarantee 100% detection (but it's close)</li>
                  <li>✗ Prevent errors from happening</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Real-world example:</strong> When a network card receives an Ethernet frame with a bad CRC, 
                it drops the frame. The upper layers (like TCP) detect the missing data and request a retransmission. 
                This process occurs automatically and transparently to the end user.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #000000, #333333)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Understanding the Mechanics</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            The following section explores the technical mechanics of CRC, including polynomial division, 
            XOR operations, and the complete calculation process.
          </p>
          <Link
            to="/how-it-works"
            style={{backgroundColor: '#F6BE00', color: '#000000'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            Continue to How It Works →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
