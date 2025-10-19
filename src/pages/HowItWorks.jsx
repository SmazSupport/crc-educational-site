import { Calculator, GitBranch, Binary, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How CRC Works
          </h1>
          <p className="text-lg text-gray-600">
            Understanding the mathematics and process behind CRC calculation
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Basic Process</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              CRC calculation involves treating data as a polynomial with binary coefficients 
              and performing polynomial division. While this sounds complex, it's actually a 
              systematic process that can be implemented efficiently.
            </p>

            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">The Four Main Steps:</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                  <div>
                    <strong className="text-gray-800">Append zeros:</strong>
                    <span className="text-gray-700"> Add n zeros to the data (where n is the degree of the generator polynomial)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                  <div>
                    <strong className="text-gray-800">Divide:</strong>
                    <span className="text-gray-700"> Perform binary polynomial division using XOR operations</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                  <div>
                    <strong className="text-gray-800">Extract remainder:</strong>
                    <span className="text-gray-700"> The remainder is the CRC checksum</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                  <div>
                    <strong className="text-gray-800">Append checksum:</strong>
                    <span className="text-gray-700"> Replace the appended zeros with the CRC value</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Polynomial Representation */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Binary className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Polynomial Representation</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              In CRC, binary data is represented as polynomials where each bit position 
              corresponds to a power of x. A '1' bit means that term is present, and a '0' 
              means it's absent.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Example:</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Binary data:</span>
                  <span className="text-primary-700 font-bold">1101</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Polynomial:</span>
                  <span className="text-primary-700 font-bold">1x³ + 1x² + 0x¹ + 1x⁰</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Simplified:</span>
                  <span className="text-primary-700 font-bold">x³ + x² + 1</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              This polynomial representation allows us to use algebraic operations for error 
              detection, making the mathematics elegant and the hardware implementation efficient.
            </p>
          </div>
        </section>

        {/* Generator Polynomials */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <GitBranch className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Common Generator Polynomials</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The generator polynomial (also called the divisor) is a predetermined pattern 
              chosen for its mathematical properties. Different applications use different 
              standard polynomials.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Polynomial</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Binary</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Common Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-800">CRC-8</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">x⁸+x²+x+1</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">100000111</td>
                    <td className="px-4 py-3 text-gray-600">ATM, 1-Wire</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">CRC-16</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">x¹⁶+x¹⁵+x²+1</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">11000000000000101</td>
                    <td className="px-4 py-3 text-gray-600">USB, Modbus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-800">CRC-32</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">x³²+x²⁶+x²³+...+1</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">33 bits total</td>
                    <td className="px-4 py-3 text-gray-600">Ethernet, ZIP</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">CRC-CCITT</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">x¹⁶+x¹²+x⁵+1</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">10001000000100001</td>
                    <td className="px-4 py-3 text-gray-600">Bluetooth, HDLC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Step-by-Step Example */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Step-by-Step Example</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Let's calculate CRC for a simple example to understand the process:
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-4">
              <div className="mb-4">
                <p className="font-semibold text-gray-800 mb-2">Given:</p>
                <ul className="space-y-1 text-sm text-gray-700 font-mono">
                  <li>• Data: <span className="text-primary-700 font-bold">1101</span></li>
                  <li>• Generator: <span className="text-primary-700 font-bold">1011</span> (3-bit CRC)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Step 1: Append zeros</p>
                  <p className="text-sm text-gray-700 font-mono">
                    1101 + 000 = <span className="text-primary-700 font-bold">1101000</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    (Append 3 zeros because generator is 4 bits, degree = 3)
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">Step 2: Perform XOR division</p>
                  <div className="bg-white rounded p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-gray-700">
{`        1100    (quotient - not needed)
       ------
1011 | 1101000
       1011
       ----
        110000
        1011
        ----
         10110
         1011
         ----
          01010
           1011
           ----
            001  (remainder = CRC)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">Step 3: Result</p>
                  <p className="text-sm text-gray-700 font-mono">
                    CRC checksum = <span className="text-primary-700 font-bold">001</span>
                  </p>
                  <p className="text-sm text-gray-700 font-mono mt-2">
                    Transmitted data = <span className="text-primary-700 font-bold">1101001</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    (Original data + CRC checksum)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> In CRC division, we use XOR (exclusive OR) instead 
                of regular subtraction. This means we don't "borrow" like in normal division - 
                we just XOR the bits.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle2 className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Verification at Receiver</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              When the receiver gets the data, it performs the same CRC calculation on the 
              entire received message (data + CRC). If no errors occurred, the remainder 
              should be zero.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle2 className="mr-2" size={20} />
                  No Errors Detected
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Received: <span className="font-mono">1101001</span>
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  CRC calculation remainder: <span className="font-mono font-bold">000</span>
                </p>
                <p className="text-sm text-gray-600">
                  ✓ Data is accepted as valid
                </p>
              </div>

              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                  <CheckCircle2 className="mr-2" size={20} />
                  Error Detected
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Received: <span className="font-mono">1111001</span> (bit flipped)
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  CRC calculation remainder: <span className="font-mono font-bold">010</span>
                </p>
                <p className="text-sm text-gray-600">
                  ✗ Data is rejected, retransmission requested
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Properties and Capabilities */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Error Detection Capabilities
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              CRC's mathematical properties give it powerful error detection capabilities:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">✓ All Single-Bit Errors</h3>
                <p className="text-gray-600 text-sm">
                  Any single bit that flips will always be detected, regardless of data length.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">✓ All Double-Bit Errors</h3>
                <p className="text-gray-600 text-sm">
                  Any two bits that flip will be detected if the generator polynomial is chosen properly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">✓ Any Odd Number of Errors</h3>
                <p className="text-gray-600 text-sm">
                  If the generator polynomial has (x+1) as a factor, all odd numbers of bit errors are detected.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">✓ Burst Errors</h3>
                <p className="text-gray-600 text-sm">
                  All burst errors shorter than the CRC length are detected. Longer bursts are detected with high probability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Try It Yourself!</h3>
          <p className="mb-6">
            Use our interactive CRC calculator to experiment with different data and 
            generator polynomials.
          </p>
          <a
            href="/calculator"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Open CRC Calculator →
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
