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
              <BookOpen className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Sources</h2>
            </div>

            <div className="space-y-6">
              {/* Reference 1 - Textbook */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[1]</span>
                  <span>Stallings, W. (2013). <em>Data and Computer Communications</em> (10th ed.). 
                  Pearson Education.</span>
                </p>
              </div>

              {/* Reference 2 - Newton's Dictionary */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[2]</span>
                  <span>Newton, H. (2007). <em>Newton's Telecom Dictionary</em> (23rd ed.). 
                  CMP Books.</span>
                </p>
              </div>

              {/* Reference 3 - Online Resource */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[3]</span>
                  <span>Koopman, P. (2002). "32-Bit Cyclic Redundancy Codes for Internet Applications." 
                  <em>Proceedings of the International Conference on Dependable Systems and Networks</em>. 
                  Retrieved from <a href="https://users.ece.cmu.edu/~koopman/crc/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://users.ece.cmu.edu/~koopman/crc/</a></span>
                </p>
              </div>

              {/* Reference 4 - IEEE Standard */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[4]</span>
                  <span>IEEE Computer Society. (2012). <em>IEEE Standard for Ethernet</em> 
                  (IEEE Std 802.3-2012). Institute of Electrical and Electronics Engineers.</span>
                </p>
              </div>

              {/* Reference 5 - RFC */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[5]</span>
                  <span>Stone, J., & Partridge, C. (2000). "When the CRC and TCP Checksum Disagree." 
                  <em>ACM SIGCOMM Computer Communication Review</em>, 30(4), 309-319.</span>
                </p>
              </div>

              {/* Reference 6 - Tutorial */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 flex items-end">
                  <span className="font-bold text-sm mr-2">[6]</span>
                  <span>Williams, R. (1993). "A Painless Guide to CRC Error Detection Algorithms." 
                  Retrieved from <a href="http://www.ross.net/crc/download/crc_v3.txt" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">http://www.ross.net/crc/</a></span>
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
