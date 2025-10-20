import { Link } from 'react-router-dom';
import { Calculator, Binary, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          How CRC Works
        </h1>

        {/* Basic Process */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calculator className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">The Basic Process</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              CRC works in four main steps:
            </p>

            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Choose a Generator Polynomial</h3>
                  <p className="text-gray-700 text-sm">
                    Both the sender and receiver agree on a special binary number called the "generator polynomial." 
                    Common ones include CRC-8, CRC-16, and CRC-32.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Perform Polynomial Division</h3>
                  <p className="text-gray-700 text-sm">
                    The sender divides the data by the generator polynomial using a special kind of division 
                    (modulo-2 division, which uses XOR operations instead of normal subtraction).
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Append the Remainder</h3>
                  <p className="text-gray-700 text-sm">
                    The remainder from the division is the CRC value. This gets added to the end of the data 
                    before sending it.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Verify at the Receiver</h3>
                  <p className="text-gray-700 text-sm">
                    The receiver does the same division on the received data (including the CRC). If there are 
                    no errors, the remainder should be zero!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Example */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Binary className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Simple Example</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Let's say we want to send the data: <code className="bg-gray-100 px-2 py-1 rounded">1101</code>
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 1: Choose Generator</h3>
              <p className="text-sm text-gray-700">
                Generator polynomial: <code className="bg-white px-2 py-1 rounded">1011</code> (CRC-3)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 2: Add Zeros</h3>
              <p className="text-sm text-gray-700 mb-2">
                Add 3 zeros to the data (one less than the generator length):
              </p>
              <p className="text-sm font-mono bg-white px-2 py-1 rounded inline-block">
                1101<span className="text-red-600">000</span>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 3: Divide</h3>
              <p className="text-sm text-gray-700 mb-2">
                Divide 1101000 by 1011 using XOR operations. The remainder is the CRC.
              </p>
              <p className="text-sm text-gray-700">
                (The actual division process uses XOR, which is covered in the calculator section)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Step 4: Send Data + CRC</h3>
              <p className="text-sm text-gray-700">
                Send the original data with the CRC remainder appended to it.
              </p>
            </div>
          </div>
        </section>

        {/* Common CRC Polynomials */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Common CRC Polynomials</h2>
            
            <p className="text-gray-700 mb-4">
              Different applications use different CRC polynomials. Here are some common ones:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Name</th>
                    <th className="px-4 py-3 text-left font-semibold">Polynomial</th>
                    <th className="px-4 py-3 text-left font-semibold">Used In</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">CRC-8</td>
                    <td className="px-4 py-3 font-mono text-xs">x^8 + x^2 + x + 1</td>
                    <td className="px-4 py-3">Simple devices</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">CRC-16</td>
                    <td className="px-4 py-3 font-mono text-xs">x^16 + x^15 + x^2 + 1</td>
                    <td className="px-4 py-3">USB, Modbus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">CRC-32</td>
                    <td className="px-4 py-3 font-mono text-xs">x^32 + x^26 + ... + 1</td>
                    <td className="px-4 py-3">Ethernet, ZIP files</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Key Points to Remember</h2>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>CRC uses polynomial division, but with XOR instead of normal subtraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>The remainder from the division is the CRC value</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Both sender and receiver must use the same generator polynomial</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>If the receiver gets a non-zero remainder, there's an error</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Longer CRC values (like CRC-32) catch more errors than shorter ones (like CRC-8)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #0d9488, #0f766e)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Try It Yourself!</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Use our interactive calculator to see CRC in action with your own data.
          </p>
          <Link
            to="/calculator"
            style={{backgroundColor: '#ffffff', color: '#0f766e'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-md"
          >
            Go to Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
