import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const References = () => {
  const references = [
    {
      id: 1,
      type: 'Textbook',
      citation: 'Stallings, W. (2013). Data and Computer Communications (10th ed.). Pearson.',
      description: 'Primary course textbook covering error detection and CRC methodology in Chapter 6.',
      url: null,
    },
    {
      id: 2,
      type: 'Technical Standard',
      citation: 'IEEE. (2018). IEEE Standard for Ethernet - IEEE Std 802.3-2018. IEEE.',
      description: 'Official Ethernet standard documenting CRC-32 implementation for frame check sequences.',
      url: 'https://standards.ieee.org/standard/802_3-2018.html',
    },
    {
      id: 3,
      type: 'Academic Paper',
      citation: 'Peterson, W. W., & Brown, D. T. (1961). Cyclic Codes for Error Detection. Proceedings of the IRE, 49(1), 228-235.',
      description: 'Foundational paper introducing cyclic codes and CRC methodology.',
      url: null,
    },
    {
      id: 4,
      type: 'Technical Article',
      citation: 'Koopman, P., & Chakravarty, T. (2004). Cyclic Redundancy Code (CRC) Polynomial Selection for Embedded Networks. Proceedings of the International Conference on Dependable Systems and Networks, 145-154.',
      description: 'Research on optimal CRC polynomial selection for different applications.',
      url: null,
    },
    {
      id: 5,
      type: 'Online Resource',
      citation: 'Williams, R. (1993). A Painless Guide to CRC Error Detection Algorithms. Retrieved from https://www.zlib.net/crc_v3.txt',
      description: 'Comprehensive tutorial on CRC implementation and algorithms.',
      url: 'https://www.zlib.net/crc_v3.txt',
    },
    {
      id: 6,
      type: 'RFC Document',
      citation: 'Stone, J., & Partridge, C. (2000). When the CRC and TCP Checksum Disagree (RFC 3309). Internet Engineering Task Force.',
      description: 'Analysis of CRC behavior in TCP/IP networks.',
      url: 'https://www.rfc-editor.org/rfc/rfc3309',
    },
    {
      id: 7,
      type: 'Technical Documentation',
      citation: 'Intel Corporation. (2014). Intel 64 and IA-32 Architectures Software Developer\'s Manual. Intel.',
      description: 'Hardware implementation details for CRC instructions in modern processors.',
      url: null,
    },
    {
      id: 8,
      type: 'Academic Resource',
      citation: 'Tanenbaum, A. S., & Wetherall, D. J. (2011). Computer Networks (5th ed.). Pearson.',
      description: 'Supplementary textbook covering data link layer and error detection methods.',
      url: null,
    },
  ];

  const additionalResources = [
    {
      title: 'CRC Calculator Online Tools',
      description: 'Various online implementations used for verification and testing',
    },
    {
      title: 'IEEE Xplore Digital Library',
      description: 'Database for technical papers on error detection and correction',
    },
    {
      title: 'IETF RFC Repository',
      description: 'Standards documents for network protocols using CRC',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">References & Citations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All sources used in the creation of this educational website are properly cited below. 
            This project adheres to academic integrity standards and acknowledges all referenced materials.
          </p>
        </div>

        {/* Citation Format Notice */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Citation Format:</strong> All citations follow APA 7th Edition style guidelines.
          </p>
        </div>

        {/* Primary References */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <BookOpen className="mr-3 text-primary-600" size={28} />
            Primary References
          </h2>
          
          <div className="space-y-4">
            {references.map((ref) => (
              <div key={ref.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {ref.type}
                  </span>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 flex items-center text-sm"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Source
                    </a>
                  )}
                </div>
                
                <p className="text-gray-800 mb-2 font-medium">{ref.citation}</p>
                <p className="text-gray-600 text-sm">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="mr-3 text-primary-600" size={28} />
            Additional Resources Consulted
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              The following resources were consulted during research and preparation:
            </p>
            <ul className="space-y-3">
              {additionalResources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-800">{resource.title}</p>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image & Graphics Credits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Image & Graphics Credits</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              All diagrams, flowcharts, and visualizations on this website were created specifically 
              for this project using:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                React and JavaScript for interactive components
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                Lucide React icon library (MIT License)
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                TailwindCSS for styling and layout
              </li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              No copyrighted images or graphics were used without permission. All visual content 
              is either original work or uses open-source, properly licensed materials.
            </p>
          </div>
        </div>

        {/* Academic Integrity Statement */}
        <div className="bg-gray-800 text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Academic Integrity Statement</h3>
          <p className="text-gray-300 text-sm">
            This educational website was created in accordance with Fort Hays State University's 
            academic integrity policies. All external sources have been properly cited, and all 
            original content has been created specifically for this project. The information 
            presented represents my understanding of CRC error checking methodology based on 
            course materials and the referenced sources listed above.
          </p>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default References;
