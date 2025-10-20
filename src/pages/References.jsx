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

      </div>
    </div>
  );
};

export default References;
