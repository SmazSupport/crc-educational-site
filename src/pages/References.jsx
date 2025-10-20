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
                <p className="text-gray-800">
                  <strong>[1]</strong> Stallings, W. (2013). <em>Data and Computer Communications</em> (10th ed.). 
                  Pearson Education.
                </p>
              </div>

              {/* Reference 2 - Newton's Dictionary */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800">
                  <strong>[2]</strong> Newton, H. (2007). <em>Newton's Telecom Dictionary</em> (23rd ed.). 
                  CMP Books.
                </p>
              </div>

              {/* Reference 3 - IEEE Standard */}
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-800">
                  <strong>[3]</strong> IEEE Computer Society. (2012). <em>IEEE Standard for Ethernet</em> 
                  (IEEE Std 802.3-2012). Institute of Electrical and Electronics Engineers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div style={{background: 'linear-gradient(to right, #0284c7, #0369a1)'}} className="rounded-lg p-8 text-center mb-8 shadow-lg">
          <h3 style={{color: '#ffffff'}} className="text-2xl font-bold mb-3">Finished Exploring?</h3>
          <p style={{color: '#ffffff'}} className="mb-6">
            Return to the home page or try the interactive calculator.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/crc-educational-site/"
              style={{backgroundColor: '#ffffff', color: '#0369a1'}}
              className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-md"
            >
              ← Back to Home
            </a>
            <a
              href="/crc-educational-site/calculator"
              style={{backgroundColor: '#ffffff', color: '#0369a1'}}
              className="inline-block font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-md"
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
