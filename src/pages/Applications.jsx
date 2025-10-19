import { Wifi, HardDrive, Network, Smartphone, Database, Globe } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      icon: Network,
      title: 'Ethernet Networks',
      description: 'CRC-32 is used in IEEE 802.3 Ethernet frames as the Frame Check Sequence (FCS) to detect transmission errors.',
      details: [
        'Protects 1500-byte data frames',
        'Detects 99.9999% of errors',
        'Hardware-accelerated in network cards',
        'Standard since 1980s'
      ],
      color: 'blue'
    },
    {
      icon: Wifi,
      title: 'WiFi & Wireless',
      description: 'IEEE 802.11 WiFi standards use CRC for error detection in wireless data transmission.',
      details: [
        'CRC-32 for data frames',
        'Critical for noisy wireless channels',
        'Used in WPA/WPA2 encryption',
        'Bluetooth also uses CRC-16'
      ],
      color: 'purple'
    },
    {
      icon: HardDrive,
      title: 'Storage Devices',
      description: 'Hard drives, SSDs, and memory cards use CRC to ensure data integrity during read/write operations.',
      details: [
        'Protects against bit rot',
        'Used in RAID systems',
        'Flash memory error detection',
        'Critical for data reliability'
      ],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'USB & Serial',
      description: 'USB protocol uses CRC-16 and CRC-5 for packet error detection in data transfers.',
      details: [
        'CRC-16 for data packets',
        'CRC-5 for token packets',
        'Ensures reliable device communication',
        'Used in USB 1.0 through 3.2'
      ],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'File Formats',
      description: 'Many file formats and compression algorithms use CRC for data integrity verification.',
      details: [
        'ZIP/GZIP compression',
        'PNG image format',
        'RAR archives',
        'PDF documents'
      ],
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Internet Protocols',
      description: 'Various internet protocols employ CRC for error detection in data transmission.',
      details: [
        'PPP (Point-to-Point Protocol)',
        'HDLC framing',
        'Frame Relay',
        'ATM networks'
      ],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      cyan: 'bg-cyan-100 text-cyan-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Real-World Applications of CRC
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CRC is ubiquitous in modern technology. From the WiFi you're using right now 
            to the storage device holding this webpage, CRC is working behind the scenes 
            to ensure data integrity.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">Billions</p>
            <p className="text-gray-600">of CRC calculations per second worldwide</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">1961</p>
            <p className="text-gray-600">Year CRC was first introduced</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">99.9%+</p>
            <p className="text-gray-600">Error detection rate</p>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-start mb-4">
                  <div className={`w-14 h-14 ${getColorClasses(app.color)} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {app.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study: Ethernet */}
        <section className="mb-12">
          <div className="card bg-gradient-to-br from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Case Study: CRC in Ethernet
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">How It Works</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Every Ethernet frame includes a 32-bit Frame Check Sequence (FCS) calculated 
                  using the CRC-32 polynomial. The sending network card calculates the CRC over 
                  the entire frame and appends it. The receiving card recalculates the CRC and 
                  compares it to the received FCS.
                </p>
                
                <div className="bg-white rounded-lg p-4 font-mono text-xs">
                  <p className="text-gray-600 mb-2">Ethernet Frame Structure:</p>
                  <div className="space-y-1 text-gray-700">
                    <div>[ Preamble | Dest | Source | Type | Data | <span className="text-primary-700 font-bold">FCS</span> ]</div>
                    <div className="text-gray-500">                                              ↑</div>
                    <div className="text-gray-500">                                         CRC-32</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Why CRC-32?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-800 text-sm">High Reliability:</strong>
                      <p className="text-gray-600 text-sm">Detects all burst errors up to 32 bits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-800 text-sm">Hardware Efficient:</strong>
                      <p className="text-gray-600 text-sm">Implemented in silicon for gigabit speeds</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-800 text-sm">Low Overhead:</strong>
                      <p className="text-gray-600 text-sm">Only 4 bytes for frames up to 1500 bytes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-800 text-sm">Standardized:</strong>
                      <p className="text-gray-600 text-sm">IEEE 802.3 standard ensures compatibility</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Impact</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Telecommunications</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CRC is fundamental to modern telecommunications. From cell phone calls to 
                  satellite communications, CRC ensures that voice and data arrive intact. 
                  4G and 5G networks use sophisticated CRC schemes to maintain quality of 
                  service even in challenging radio environments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Data Centers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In data centers handling petabytes of information, CRC is used at multiple 
                  layers: network switches use CRC for packet integrity, storage systems use 
                  CRC for data protection, and memory systems use ECC (which includes CRC 
                  principles) to prevent corruption.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Embedded Systems</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Microcontrollers and embedded systems in cars, appliances, and industrial 
                  equipment rely on CRC for reliable communication between components. Modern 
                  vehicles can have over 100 microcontrollers communicating via CAN bus, all 
                  using CRC for error detection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cloud Computing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cloud services depend on CRC at every level. From the network connections 
                  between data centers to the storage of your files, CRC helps ensure that 
                  your data remains intact and accessible. Services like AWS, Azure, and 
                  Google Cloud use CRC extensively in their infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future of CRC */}
        <section className="mb-12">
          <div className="card bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4">The Future of CRC</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Despite being over 60 years old, CRC remains relevant and continues to evolve:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Hardware Acceleration</h3>
                <p className="text-gray-300 text-sm">
                  Modern CPUs include CRC instructions (like Intel's CRC32 instruction) for 
                  even faster computation in software.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">New Polynomials</h3>
                <p className="text-gray-300 text-sm">
                  Research continues on optimal polynomial selection for specific applications 
                  and data patterns.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">IoT Devices</h3>
                <p className="text-gray-300 text-sm">
                  The explosion of IoT devices means billions more CRC calculations daily for 
                  sensor data and device communication.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">
                  Even quantum computers will need error detection, and CRC principles may 
                  inform quantum error correction codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Explore More</h3>
          <p className="mb-6">
            Learn about the technical details and try calculating CRC yourself!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/how-it-works"
              className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              How It Works
            </a>
            <a
              href="/calculator"
              className="inline-block bg-primary-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-900 transition-colors border-2 border-white"
            >
              Try Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
