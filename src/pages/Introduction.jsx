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
              <strong>Cyclic Redundancy Check (CRC)</strong> is how we catch errors in data before they cause problems (Stallings, 2013). 
              When you send data over a network or write it to a hard drive, bits can flip — 
              maybe from electrical noise, a scratched disk, or interference on the wire. CRC is our quality-control checkpoint 
              that tells us if the data got corrupted.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-fhsu-gold p-4 mb-4">
              <p className="text-gray-700">
                <strong>Think of it like this:</strong> Imagine you're shipping a box through your warehouse. 
                Before it leaves, you count all the items and write the total on the packing slip. When it arrives at the destination, 
                they count again. If the counts match, the shipment's good. If not, something went missing in transit. 
                That's basically what CRC does — but with data instead of boxes.
              </p>
            </div>

            <p className="text-gray-700">
              Under the hood, CRC uses polynomial division on binary data — kind of like long division you learned in school, 
              but with XOR operations instead of subtraction (Stallings, 2013). The remainder from that division becomes our "check value" 
              that travels with the data.
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
              We use CRC everywhere because it hits the sweet spot between reliability and efficiency (Stallings, 2013; Newton, 2007):
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Catches most errors</strong> — burst errors, single-bit flips, you name it</li>
              <li><strong>Hardware-friendly</strong> — simple circuits can calculate it on the fly</li>
              <li><strong>Low overhead</strong> — we're talking a few extra bytes, not megabytes</li>
              <li><strong>Fast</strong> — happens in microseconds, even on basic chips</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2">
                <strong>For you, that means:</strong>
              </p>
              <p className="text-gray-700">
                Every time you connect to WiFi, plug in a USB drive, or stream a video over Ethernet, 
                CRC is running in the background making sure your data arrives intact. It's the invisible quality-control 
                layer that keeps the digital world reliable.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief History</h2>
            
            <p className="text-gray-700 mb-4">
              CRC showed up in 1961 when engineers needed a reliable way to catch transmission errors (Newton, 2007). 
              Back then, data lines were noisy and unreliable — think telegraph-era tech trying to handle computer data. 
              As networks exploded in the '70s and '80s, CRC became the go-to standard because it just worked (Stallings, 2013).
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Key Milestones:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1961:</strong> CRC algorithm developed — engineers needed error detection for early data links</li>
                <li><strong>1980s:</strong> Ethernet (IEEE 802.3) adopted CRC-32 — became the backbone of office networks (IEEE Standards Association, 2018)</li>
                <li><strong>Today:</strong> Built into almost every digital communication protocol you can think of</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detection vs Correction */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detection vs. Correction</h2>
            
            <p className="text-gray-700 mb-4">
              Here's the key thing: CRC can <strong>detect</strong> errors, but it can't <strong>fix</strong> them (Stallings, 2013). 
              Think of it like a smoke detector — it tells you there's a problem, but it doesn't put out the fire. 
              When CRC catches an error, the system typically just asks for a retransmission (Cisco Systems, 2024).
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">What CRC Does:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Spots when errors happened</li>
                  <li>✓ Flags corrupted data immediately</li>
                  <li>✓ Runs fast — we're talking microseconds</li>
                  <li>✓ Works reliably across billions of transmissions</li>
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
                <strong>Real-world example:</strong> When your network card receives an Ethernet frame with a bad CRC, 
                it just drops the frame. The upper layers (like TCP) notice the missing data and request a retransmission. 
                You never see it happen — it's all automatic.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #000000, #333333)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Ready to See How It Works?</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Now that you know what CRC does, let's dive into the actual mechanics — the polynomial division, 
            the XOR operations, and how it all comes together.
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
