import { AlertCircle, History, Target, TrendingUp } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Introduction to CRC Error Checking
          </h1>
          <p className="text-lg text-gray-600">
            Understanding the fundamentals of Cyclic Redundancy Check
          </p>
        </div>

        {/* What is CRC */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <AlertCircle className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">What is CRC?</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Cyclic Redundancy Check (CRC)</strong> is an error-detecting code commonly 
              used in digital networks and storage devices to detect accidental changes to raw data. 
              It is a powerful method for detecting errors that may occur during data transmission 
              or storage.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              CRC works by treating blocks of data as large binary numbers and performing polynomial 
              division on them. The remainder from this division becomes the CRC checksum, which is 
              appended to the data. When the data is received or retrieved, the same calculation is 
              performed. If the checksums match, the data is likely error-free.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Key Concept:</strong> CRC is a <em>detection</em> method, not a 
                <em> correction</em> method. It can identify that an error occurred but cannot 
                fix the error itself. Error correction requires additional techniques like 
                retransmission or forward error correction codes.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <History className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Historical Context</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="font-semibold text-gray-800 mb-1">1961 - The Beginning</p>
                <p className="text-gray-700 text-sm">
                  W. Wesley Peterson and D.T. Brown published the foundational paper on cyclic 
                  codes, introducing the mathematical framework for CRC.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <p className="font-semibold text-gray-800 mb-1">1970s - Widespread Adoption</p>
                <p className="text-gray-700 text-sm">
                  CRC became standardized in data communication protocols, particularly in the 
                  emerging computer networking field.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <p className="font-semibold text-gray-800 mb-1">1980s - Ethernet Standard</p>
                <p className="text-gray-700 text-sm">
                  CRC-32 was adopted as the Frame Check Sequence (FCS) in the IEEE 802.3 Ethernet 
                  standard, cementing its importance in networking.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <p className="font-semibold text-gray-800 mb-1">Present Day</p>
                <p className="text-gray-700 text-sm">
                  CRC is ubiquitous in modern technology, from WiFi and Bluetooth to hard drives 
                  and memory cards. Hardware implementations make it extremely fast and efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why CRC is Important */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Why CRC is Important</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              In data communications, errors can occur due to noise, interference, hardware 
              malfunctions, or transmission medium imperfections. CRC provides a robust mechanism 
              to detect these errors with several key advantages:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">High Detection Rate</h3>
                <p className="text-gray-600 text-sm">
                  CRC can detect all single-bit errors, all double-bit errors, any odd number 
                  of errors, and most burst errors up to the length of the CRC.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Efficient Implementation</h3>
                <p className="text-gray-600 text-sm">
                  CRC calculations can be implemented efficiently in both hardware and software, 
                  with minimal computational overhead.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Standardized</h3>
                <p className="text-gray-600 text-sm">
                  Well-defined CRC polynomials (CRC-8, CRC-16, CRC-32) are standardized across 
                  industries, ensuring interoperability.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Low Overhead</h3>
                <p className="text-gray-600 text-sm">
                  The checksum adds minimal extra data (typically 8-32 bits) compared to the 
                  payload, making it bandwidth-efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Other Methods */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                CRC vs. Other Error Detection Methods
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Method</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Detection Capability</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Overhead</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Complexity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-800">Parity Bit</td>
                    <td className="px-4 py-3 text-gray-600">Single-bit errors only</td>
                    <td className="px-4 py-3 text-gray-600">Very Low (1 bit)</td>
                    <td className="px-4 py-3 text-gray-600">Very Simple</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">Checksum</td>
                    <td className="px-4 py-3 text-gray-600">Moderate, some burst errors</td>
                    <td className="px-4 py-3 text-gray-600">Low (8-16 bits)</td>
                    <td className="px-4 py-3 text-gray-600">Simple</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-primary-700">CRC</td>
                    <td className="px-4 py-3 text-gray-600">High, most burst errors</td>
                    <td className="px-4 py-3 text-gray-600">Low (8-32 bits)</td>
                    <td className="px-4 py-3 text-gray-600">Moderate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">Hamming Code</td>
                    <td className="px-4 py-3 text-gray-600">Can detect & correct</td>
                    <td className="px-4 py-3 text-gray-600">High (multiple bits)</td>
                    <td className="px-4 py-3 text-gray-600">Complex</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              CRC strikes an optimal balance between detection capability, overhead, and 
              implementation complexity, making it the preferred choice for most data 
              communication applications.
            </p>
          </div>
        </section>

        {/* Key Terminology */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Terminology</h2>
            
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-800 mb-1">Generator Polynomial</dt>
                <dd className="text-gray-600 text-sm">
                  A predetermined binary pattern used as the divisor in CRC calculation. 
                  Common examples include CRC-32 (Ethernet) and CRC-16 (USB).
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-800 mb-1">Frame Check Sequence (FCS)</dt>
                <dd className="text-gray-600 text-sm">
                  The CRC value appended to a data frame for error detection, particularly 
                  in network protocols like Ethernet.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-800 mb-1">Polynomial Division</dt>
                <dd className="text-gray-600 text-sm">
                  The mathematical operation used in CRC, performed using XOR operations on 
                  binary data rather than traditional arithmetic division.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-800 mb-1">Burst Error</dt>
                <dd className="text-gray-600 text-sm">
                  A sequence of consecutive bit errors, common in real-world transmission. 
                  CRC is particularly effective at detecting burst errors.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-800 mb-1">Checksum</dt>
                <dd className="text-gray-600 text-sm">
                  The remainder value produced by CRC calculation, used to verify data integrity.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Learn More?</h3>
          <p className="mb-6">
            Now that you understand what CRC is and why it's important, let's explore 
            how it actually works!
          </p>
          <a
            href="/how-it-works"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Continue to How It Works →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
