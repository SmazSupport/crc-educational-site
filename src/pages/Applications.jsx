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
          CRC operates in the background of nearly every digital system in use today. 
          The following sections describe its real-world applications:
        </p>

        {/* Ethernet Networks */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Network className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Ethernet Networks</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Ethernet (IEEE 802.3) uses CRC-32 on every frame transmitted across the network (IEEE Standards Association, 2018). 
              Home routers, office networks, and data center switches all perform CRC checks millions of times per second (Cisco Systems, 2024).
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">How it works in Ethernet:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Every frame gets a check value</strong> as the network card calculates a 32-bit CRC and appends it</li>
                <li><strong>Receiver validates on arrival</strong> by dropping frames with mismatched CRC values immediately</li>
                <li><strong>Upper layers handle retransmission</strong> as TCP detects missing data and requests retransmission (Stallings, 2013)</li>
                <li><strong>Process is transparent</strong> occurring automatically at wire speed</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Analogy:</strong> Ethernet frames function like packages moving through a sorting facility. 
                Each package has a barcode (the CRC). If the scanner cannot read the barcode at the destination, 
                the package is rejected and returned through the system.
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
              WiFi packets experience more interference than wired traffic (Stallings, 2013). Radio signals reflect off walls, 
              interfere with each other, and attenuate with distance. Every WiFi frame includes a CRC to detect corruption before it causes problems (Cisco Systems, 2024).
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
              CRC provides the first line of defense. If a packet arrives corrupted, the WiFi card drops it and the protocol 
              layer above requests a retransmission. Video stuttering when moving away from the router often results from 
              CRC detecting errors and triggering retransmissions.
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
              Storage devices use CRC to verify data during both write and read operations (Stallings, 2013). 
              When a file is saved, the drive calculates a CRC and stores it alongside the data. When the file is read later, 
              the drive recalculates the CRC and compares values. Mismatched values indicate data corruption.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Where you'll find it:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Hard Drives:</strong> Every sector includes error-checking to detect bit rot and mechanical errors (Stallings, 2013)</li>
                <li><strong>SSDs:</strong> Flash memory degradation over time is detected through CRC validation</li>
                <li><strong>USB Drives:</strong> Data transfers are validated in real-time during file operations</li>
                <li><strong>SD Cards:</strong> Photos and videos receive CRC protection to prevent corruption</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Real-world impact:</strong> "File is corrupted" errors often indicate CRC successfully detecting mismatched data. 
                The system refuses to use corrupted data, preventing silent data corruption from propagating.
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
                  ZIP files, PNG images, and GZIP archives all embed CRC values. "CRC failed" errors during extraction 
                  indicate file corruption occurred.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">USB Connections</h3>
                <p className="text-sm text-gray-700">
                  USB uses CRC-16 on every packet (Koopman, 2024). When a device is connected, CRC validates the data stream 
                  in real-time, enabling USB to maintain reliability even at high speeds.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bluetooth</h3>
                <p className="text-sm text-gray-700">
                  Wireless headphones, keyboards, and mice all use CRC to maintain connection integrity. 
                  Constant radio interference makes CRC essential for catching errors before they cause glitches.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Satellite Communications</h3>
                <p className="text-sm text-gray-700">
                  Signals traveling through space encounter cosmic radiation and atmospheric interference. 
                  CRC is critical for error detection when retransmission is expensive or impossible.
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
              CRC became the dominant error-detection method because it provides an optimal engineering balance (Stallings, 2013; Koopman, 2024):
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
                <strong>Summary:</strong> For systems requiring error detection, CRC is typically the optimal solution. 
                Its speed, reliability, established understanding, and hardware support explain its ubiquitous adoption.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #000000, #333333)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">References and Citations</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            All technical details and standards referenced throughout this site are documented in the References section.
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
