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
              <Calculator className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">The Basic Process</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Here's how CRC works from start to finish. Think of it like a quality-control workflow — 
              each step hands off to the next:
            </p>

            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-fhsu-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Pick a Generator Polynomial</h3>
                  <p className="text-gray-700 text-sm">
                    Both sender and receiver agree on a "generator polynomial" — basically a special binary pattern. 
                    Common ones: CRC-8 (simple devices), CRC-16 (USB, Modbus), CRC-32 (Ethernet, ZIP files). 
                    This is like agreeing on which quality-control checklist to use before you start shipping.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-fhsu-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Run the Division</h3>
                  <p className="text-gray-700 text-sm">
                    We divide the data by the generator polynomial using modulo-2 division. That's just a fancy way of saying 
                    "XOR operations instead of normal subtraction." It's like long division, but simpler — no borrowing, 
                    no carrying. The hardware does this in a few clock cycles.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-fhsu-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Attach the Remainder</h3>
                  <p className="text-gray-700 text-sm">
                    The remainder from that division is our CRC value. We tack it onto the end of the data packet — 
                    kind of like stapling the packing slip to the box. Now the data and its check value travel together.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-fhsu-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Verify on the Other End</h3>
                  <p className="text-gray-700 text-sm">
                    The receiver runs the same division on the whole thing (data + CRC). If everything arrived intact, 
                    the remainder will be zero. If it's not zero, something got corrupted in transit and we need a retransmission. 
                    Simple pass/fail check.
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
              <Binary className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Simple Example</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Let's walk through a real example. Say we want to send the binary data: <code className="bg-gray-100 px-2 py-1 rounded">1101</code>
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 1: Pick the Generator</h3>
              <p className="text-sm text-gray-700">
                We'll use generator polynomial: <code className="bg-white px-2 py-1 rounded">1011</code> (a simple CRC-3 for demonstration). 
                In the real world, Ethernet uses a 33-bit polynomial for CRC-32, but the concept's the same.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 2: Pad with Zeros</h3>
              <p className="text-sm text-gray-700 mb-2">
                We add zeros to the end of our data — specifically, one less than the generator's length. 
                So we append 3 zeros:
              </p>
              <p className="text-sm font-mono bg-white px-2 py-1 rounded inline-block">
                1101<span className="text-red-600">000</span>
              </p>
              <p className="text-sm text-gray-700 mt-2">
                This makes room for the CRC value we're about to calculate.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Step 3: Do the Division</h3>
              <p className="text-sm text-gray-700 mb-2">
                Now we divide <code className="bg-white px-2 py-1 rounded">1101000</code> by <code className="bg-white px-2 py-1 rounded">1011</code> using XOR. 
                The remainder from that division is our CRC check value.
              </p>
              <p className="text-sm text-gray-700">
                (You can see the full XOR division process in action on the Calculator page — it's easier to show than describe.)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Step 4: Ship It</h3>
              <p className="text-sm text-gray-700">
                We take the original data and append the CRC remainder. That combined packet is what actually gets transmitted. 
                The receiver runs the same division, and if the remainder is zero, we're good.
              </p>
            </div>
          </div>
        </section>

        {/* Common CRC Polynomials */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Common CRC Polynomials</h2>
            
            <p className="text-gray-700 mb-4">
              Different systems use different CRC polynomials depending on their needs <sup className="font-bold text-xs">[4]</sup><sup className="font-bold text-xs">[5]</sup>. 
              Longer polynomials catch more errors but take a bit more processing. Here are the most common:
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
              <CheckCircle className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Key Points to Remember</h2>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>XOR instead of subtraction:</strong> CRC division uses XOR operations, which makes it fast and hardware-friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>The remainder is the check value:</strong> That's what gets appended to your data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Both sides need the same polynomial:</strong> Sender and receiver have to agree on which one to use</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Zero means success:</strong> If the receiver's remainder is zero, the data's intact</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Longer = better detection:</strong> CRC-32 catches way more errors than CRC-8, but it's still only a few extra bytes</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Why this matters:</strong> When you're designing a system, you pick the CRC size based on your error rate and performance needs. 
                High-speed Ethernet uses CRC-32 because it can handle it at wire speed. Simple sensors might use CRC-8 to save processing power.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div style={{background: 'linear-gradient(to right, #000000, #333333)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">See It in Action</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Head over to the calculator and run your own data through the CRC process. 
            You'll see the XOR division step-by-step and watch how the check value gets generated.
          </p>
          <Link
            to="/calculator"
            style={{backgroundColor: '#F6BE00', color: '#000000'}}
            className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            Go to Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
