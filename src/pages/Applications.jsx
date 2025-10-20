import { Wifi, HardDrive, Network } from 'lucide-react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Real-World Applications of CRC
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          CRC is used in many technologies we use every day. Here are some common examples:
        </p>

        {/* Ethernet Networks */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Network className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Ethernet Networks</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Ethernet (IEEE 802.3) uses CRC-32 to check every frame of data sent over the network. 
              This is the same technology used in your home router and office networks.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">How it works in Ethernet:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Each Ethernet frame includes a 32-bit CRC value</li>
                <li>• The network card calculates CRC for every frame it sends</li>
                <li>• If the receiving card detects an error, it discards the frame</li>
                <li>• The sender will retransmit the frame if needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WiFi */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Wifi className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">WiFi and Wireless</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Wireless networks use CRC to detect errors caused by interference, signal degradation, 
              or obstacles between the transmitter and receiver.
            </p>

            <p className="text-gray-700">
              WiFi is especially prone to errors because radio signals can be affected by walls, 
              other devices, and distance. CRC helps ensure data integrity even in noisy environments.
            </p>
          </div>
        </section>

        {/* Storage Devices */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <HardDrive className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Storage Devices</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Hard drives, SSDs, and USB drives all use CRC to make sure data is stored and retrieved correctly.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Examples:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Hard Drives:</strong> Check data as it's written to and read from the disk</li>
                <li>• <strong>USB Drives:</strong> Verify data during file transfers</li>
                <li>• <strong>SD Cards:</strong> Ensure photos and videos are stored correctly</li>
              </ul>
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
                  ZIP files, PNG images, and many other file formats use CRC to detect corruption.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">USB Connections</h3>
                <p className="text-sm text-gray-700">
                  USB uses CRC-16 to check data packets sent between devices.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bluetooth</h3>
                <p className="text-sm text-gray-700">
                  Bluetooth devices use CRC to ensure reliable wireless communication.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Satellite Communications</h3>
                <p className="text-sm text-gray-700">
                  Satellites use CRC because signals can be corrupted traveling through space.
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
              CRC has become the standard for error detection because it offers a good balance of:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span>
                <span><strong>Effectiveness:</strong> Catches most types of errors</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span>
                <span><strong>Efficiency:</strong> Fast to calculate, even on simple hardware</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span>
                <span><strong>Low Overhead:</strong> Doesn't add much extra data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span>
                <span><strong>Standardization:</strong> Widely adopted across industries</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #0284c7, #0369a1)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Want to See the Sources?</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Check out the references used to create this educational site.
          </p>
          <a
            href="/crc-educational-site/references"
            style={{backgroundColor: '#ffffff', color: '#0369a1'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-md"
          >
            View References →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Applications;
