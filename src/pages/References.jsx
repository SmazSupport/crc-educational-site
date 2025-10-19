import { BookOpen, ExternalLink } from 'lucide-react';

const References = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          References
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          This educational website was created using the following sources:
        </p>

        {/* Main References */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <BookOpen className="text-primary-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Primary Sources</h2>
            </div>

            <div className="space-y-6">
              {/* Reference 1 - Textbook */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 mb-2">
                  <strong>[1]</strong> Stallings, W. (2013). <em>Data and Computer Communications</em> (10th ed.). 
                  Pearson Education.
                </p>
                <p className="text-sm text-gray-600">
                  This is our course textbook and the primary source for understanding CRC error detection 
                  methodology. Chapter 6 covers error detection and correction, including detailed explanations 
                  of CRC calculations and applications.
                </p>
              </div>

              {/* Reference 2 - Newton's Dictionary */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 mb-2">
                  <strong>[2]</strong> Newton, H. (2007). <em>Newton's Telecom Dictionary</em> (23rd ed.). 
                  CMP Books.
                </p>
                <p className="text-sm text-gray-600">
                  A comprehensive telecommunications dictionary that provides clear definitions of CRC and 
                  related networking terms. Used for terminology and industry context.
                </p>
              </div>

              {/* Reference 3 - IEEE Standard */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800 mb-2">
                  <strong>[3]</strong> IEEE Computer Society. (2012). <em>IEEE Standard for Ethernet</em> 
                  (IEEE Std 802.3-2012). Institute of Electrical and Electronics Engineers.
                </p>
                <p className="text-sm text-gray-600">
                  The official Ethernet standard that specifies the use of CRC-32 for frame check sequences. 
                  Referenced for real-world application examples.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Sources Were Used */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How These Sources Were Used</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Stallings textbook</strong> provided the technical foundation for understanding 
                CRC methodology, including the mathematical basis (polynomial division), common generator 
                polynomials, and error detection capabilities.
              </p>
              
              <p>
                <strong>Newton's Telecom Dictionary</strong> helped clarify terminology and provided 
                industry-standard definitions for networking and telecommunications concepts related to 
                error checking.
              </p>
              
              <p>
                <strong>IEEE 802.3 Standard</strong> was referenced to understand how CRC is actually 
                implemented in Ethernet networks, one of the most common real-world applications.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Notes</h2>
            
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
              <p className="text-gray-700 mb-2">
                <strong>Academic Integrity Statement:</strong>
              </p>
              <p className="text-sm text-gray-700">
                All information presented on this website is based on the sources listed above and 
                represents my understanding of CRC error checking methodology as studied in INF680 - 
                Data and Computer Communications. The interactive calculator and examples were created 
                to demonstrate the concepts learned from these sources.
              </p>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This website was created as an educational project for 
                Fort Hays State University, Fall 2025. The content is intended for educational 
                purposes to demonstrate understanding of CRC methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Citation Format */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Citation Format</h2>
            
            <p className="text-gray-700 mb-4">
              All references are cited in APA format (7th edition), which is the standard for 
              computer science and information systems publications.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Example APA Citation:</strong><br/>
                Author, A. A. (Year). <em>Title of work</em>. Publisher.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Finished Exploring?</h3>
          <p className="mb-6">
            Return to the home page or try the interactive calculator.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              ← Back to Home
            </a>
            <a
              href="/calculator"
              className="inline-block bg-primary-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-900 transition-colors border-2 border-white"
            >
              Try Calculator →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
