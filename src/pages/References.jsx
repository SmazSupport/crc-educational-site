import { BookOpen } from 'lucide-react';

const References = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          References
        </h1>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6 text-gray-800" style={{ lineHeight: '2' }}>
              
              <p className="pl-8" style={{ textIndent: '-2rem' }}>
                Cisco Systems. (2024). <em>Error detection and correction</em>. Cisco Networking Academy. <a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html</a>
              </p>

              <p className="pl-8" style={{ textIndent: '-2rem' }}>
                IEEE Standards Association. (2018). <em>IEEE 802.3 Ethernet Working Group</em>. <a href="https://www.ieee802.org/3/" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://www.ieee802.org/3/</a>
              </p>

              <p className="pl-8" style={{ textIndent: '-2rem' }}>
                Koopman, P. (2024). <em>Best CRC polynomials</em>. Carnegie Mellon University. <a href="https://users.ece.cmu.edu/~koopman/crc/" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://users.ece.cmu.edu/~koopman/crc/</a>
              </p>

              <p className="pl-8" style={{ textIndent: '-2rem' }}>
                Newton, H. (2007). <em>Newton's telecom dictionary</em> (23rd ed.). CMP Books.
              </p>

              <p className="pl-8" style={{ textIndent: '-2rem' }}>
                Stallings, W. (2013). <em>Data and computer communications</em> (10th ed.). Pearson Education.
              </p>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default References;
