import { BookOpen } from 'lucide-react';

const References = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          References
        </h1>

        {/* Main References */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <BookOpen className="text-fhsu-gold mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Sources</h2>
            </div>

            <div className="space-y-6">
              {/* Reference 1 - Textbook */}
              <div className="border-l-4 border-fhsu-gold pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[1]</span>
                  <span>Stallings, W. (2013). <em>Data and Computer Communications</em> (10th ed.). 
                  Pearson Education.</span>
                </p>
              </div>

              {/* Reference 2 - Newton's Dictionary */}
              <div className="border-l-4 border-fhsu-gold pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[2]</span>
                  <span>Newton, H. (2007). <em>Newton's Telecom Dictionary</em> (23rd ed.). 
                  CMP Books.</span>
                </p>
              </div>

              {/* Reference 3 - IEEE Online */}
              <div className="border-l-4 border-fhsu-gold pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[3]</span>
                  <span>IEEE Standards Association. (2018). IEEE 802.3 Ethernet Working Group. 
                  Retrieved from <a href="https://www.ieee802.org/3/" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://www.ieee802.org/3/</a></span>
                </p>
              </div>

              {/* Reference 4 - Koopman CRC */}
              <div className="border-l-4 border-fhsu-gold pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[4]</span>
                  <span>Koopman, P. (2024). Best CRC Polynomials. Carnegie Mellon University. 
                  Retrieved from <a href="https://users.ece.cmu.edu/~koopman/crc/" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://users.ece.cmu.edu/~koopman/crc/</a></span>
                </p>
              </div>

              {/* Reference 5 - Cisco Networking */}
              <div className="border-l-4 border-fhsu-gold pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[5]</span>
                  <span>Cisco Systems. (2024). Error Detection and Correction. Cisco Networking Academy. 
                  Retrieved from <a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html</a></span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default References;
