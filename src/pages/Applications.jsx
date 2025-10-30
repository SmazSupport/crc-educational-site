import { Link } from 'react-router-dom';
import { Wifi, HardDrive, Network } from 'lucide-react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Real-World Applications of CRC
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          CRC runs quietly in the background of almost every digital system you touch. 
          Here's where you'll find it doing quality control in the real world:
        </p>

        {/* Ethernet Networks */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Network className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Ethernet Networks</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Ethernet (IEEE 802.3) uses CRC-32 on every single frame that crosses the wire (IEEE Standards Association, 2018). 
              Your home router, office network, data center switches — they're all running CRC checks millions of times per second (Cisco Systems, 2024).
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">How it works in Ethernet:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Every frame gets a check value</strong> — the network card calculates a 32-bit CRC and tacks it on</li>
                <li><strong>Receiver validates on arrival</strong> — if the CRC doesn't match, the frame gets dropped immediately</li>
                <li><strong>Upper layers handle retransmission</strong> — TCP notices the missing data and asks for it again (Stallings, 2013)</li>
                <li><strong>You never see it happen</strong> — it's all automatic, happening at wire speed</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Think of it like this:</strong> Ethernet frames are like packages moving through a sorting facility. 
                Each package has a barcode (the CRC). If the scanner can't read the barcode at the destination, 
                the package gets rejected and sent back through the system.
              </p>
            </div>
          </div>
        </section>

        {/* WiFi */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Wifi className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">WiFi and Wireless</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              WiFi packets get beat up even more than wired traffic (Stallings, 2013). Radio signals bounce off walls, 
              interfere with each other, and fade with distance. Every WiFi frame includes a CRC to catch corruption before it causes problems (Cisco Systems, 2024).
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Why WiFi needs CRC even more:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Radio interference from microwaves, Bluetooth, other WiFi networks</li>
                <li>• Signal degradation through walls and obstacles</li>
                <li>• Multiple devices competing for airtime</li>
                <li>• Movement causing signal strength to fluctuate</li>
              </ul>
            </div>

            <p className="text-gray-700 mt-4">
              CRC is your first line of defense. If a packet arrives corrupted, the WiFi card drops it and the protocol 
              layer above requests a retransmission. That's why your video might stutter when you walk too far from the router — 
              CRC is catching errors and triggering retransmits.
            </p>
          </div>
        </section>

        {/* Storage Devices */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <HardDrive className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Storage Devices</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Storage devices use CRC to verify data both when writing and reading (Stallings, 2013). Think of it like this: 
              when you save a file, the drive calculates a CRC and stores it alongside the data. When you read that file later, 
              it recalculates the CRC and compares. If they don't match, the data got corrupted.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Where you'll find it:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Hard Drives:</strong> Every sector has error-checking built in — CRC catches bit rot and mechanical errors (Stallings, 2013)</li>
                <li><strong>SSDs:</strong> Flash memory can degrade over time; CRC detects when cells start failing</li>
                <li><strong>USB Drives:</strong> Data transfers get validated in real-time as files copy</li>
                <li><strong>SD Cards:</strong> Your photos and videos get CRC protection so corruption doesn't ruin your memories</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Real-world impact:</strong> Ever seen a "file is corrupted" error? That's often CRC doing its job — 
                it detected the data doesn't match the check value, so the system refuses to use it. Better a clean error than silent data corruption.
              </p>
            </div>
          </div>
        </section>

        {/* Other Applications */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Common Uses</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">File Formats</h3>
                <p className="text-sm text-gray-700">
                  ZIP files, PNG images, GZIP archives — they all embed CRC values. When you extract a ZIP and see 
                  "CRC failed," that's the archive telling you the file got corrupted.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">USB Connections</h3>
                <p className="text-sm text-gray-700">
                  USB uses CRC-16 on every packet (Koopman, 2024). When you plug in a device, CRC is validating the data stream 
                  in real-time — that's how USB maintains reliability even at high speeds.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bluetooth</h3>
                <p className="text-sm text-gray-700">
                  Your wireless headphones, keyboard, mouse — all using CRC to keep the connection clean. 
                  Radio interference is constant, so CRC catches errors before they turn into glitches.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Satellite Communications</h3>
                <p className="text-sm text-gray-700">
                  Signals traveling through space get hit by cosmic radiation and atmospheric interference. 
                  CRC is critical for catching errors when retransmission is expensive or impossible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why CRC is Popular */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why is CRC So Popular?</h2>
            
            <p className="text-gray-700 mb-4">
              CRC won the error-detection race because it hits the engineering sweet spot (Stallings, 2013; Koopman, 2024):
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-fhsu-gold mr-2 font-bold">✓</span>
                <span><strong>Catches the errors that matter:</strong> Burst errors, single-bit flips, most multi-bit corruption</span>
              </li>
              <li className="flex items-start">
                <span className="text-fhsu-gold mr-2 font-bold">✓</span>
                <span><strong>Hardware-friendly:</strong> Simple shift-register circuits can calculate it at wire speed</span>
              </li>
              <li className="flex items-start">
                <span className="text-fhsu-gold mr-2 font-bold">✓</span>
                <span><strong>Minimal overhead:</strong> A few bytes per packet — negligible compared to payload size</span>
              </li>
              <li className="flex items-start">
                <span className="text-fhsu-gold mr-2 font-bold">✓</span>
                <span><strong>Battle-tested:</strong> Decades of use across billions of devices prove it works</span>
              </li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Bottom line:</strong> When you're building a system that needs error detection, CRC is usually the right answer. 
                It's fast, reliable, well-understood, and supported by hardware. That's why it's everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #000000, #333333)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Check the Sources</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            All the technical details and standards referenced in this site are cited in the References section.
          </p>
          <Link
            to="/references"
            style={{backgroundColor: '#F6BE00', color: '#000000'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            View References →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Applications;
