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

        {/* Design Attribution */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Design Attribution</h2>
            <p className="text-gray-700">
              The color scheme and visual style of this website are based on the Fort Hays State University (FHSU) brand guidelines. 
              The primary colors—FHSU Black (#000000) and Tiger Gold (#F6BE00)—along with the typography choices (Montserrat for headings, Open Sans for body text) 
              were adapted from the official FHSU website (<a href="https://www.fhsu.edu" target="_blank" rel="noopener noreferrer" className="text-fhsu-gold hover:underline">https://www.fhsu.edu</a>) 
              to maintain institutional brand consistency.
            </p>
          </div>
        </section>

        {/* Development Stack */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Development Stack</h2>
            <p className="text-gray-700 mb-4">
              This educational website was built using modern web development technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>React</strong> - JavaScript library for building the user interface</li>
              <li><strong>React Router</strong> - Client-side routing for navigation between pages</li>
              <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for styling</li>
              <li><strong>Vite</strong> - Build tool and development server</li>
              <li><strong>Lucide React</strong> - Icon library for UI elements</li>
              <li><strong>GitHub Pages</strong> - Hosting platform for deployment</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The source code is version-controlled using Git and hosted on GitHub, enabling collaborative development and continuous deployment.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default References;
