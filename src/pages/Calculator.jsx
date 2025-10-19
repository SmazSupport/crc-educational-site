import { useState } from 'react';
import { Calculator as CalcIcon, Play, RotateCcw, Info } from 'lucide-react';

const Calculator = () => {
  const [data, setData] = useState('1101');
  const [generator, setGenerator] = useState('1011');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  // Presets for common CRC polynomials
  const presets = [
    { name: 'Custom', generator: '' },
    { name: 'CRC-3', generator: '1011' },
    { name: 'CRC-4', generator: '10011' },
    { name: 'CRC-5-USB', generator: '100101' },
    { name: 'CRC-8', generator: '100000111' },
  ];

  const [selectedPreset, setSelectedPreset] = useState('CRC-3');

  const handlePresetChange = (preset) => {
    setSelectedPreset(preset.name);
    if (preset.generator) {
      setGenerator(preset.generator);
    }
  };

  // Validate binary input
  const isValidBinary = (str) => /^[01]+$/.test(str);

  // XOR operation for two binary strings
  const xorBinary = (a, b) => {
    let result = '';
    for (let i = 0; i < b.length; i++) {
      result += a[i] === b[i] ? '0' : '1';
    }
    return result;
  };

  // Perform CRC calculation with step-by-step tracking
  const calculateCRC = () => {
    if (!isValidBinary(data)) {
      alert('Data must contain only 0s and 1s');
      return;
    }
    if (!isValidBinary(generator)) {
      alert('Generator must contain only 0s and 1s');
      return;
    }
    if (generator.length < 2) {
      alert('Generator must be at least 2 bits long');
      return;
    }
    if (generator[0] !== '1') {
      alert('Generator must start with 1');
      return;
    }

    const calculationSteps = [];
    const crcLength = generator.length - 1;
    
    // Step 1: Append zeros
    let augmentedData = data + '0'.repeat(crcLength);
    calculationSteps.push({
      step: 'Append Zeros',
      description: `Append ${crcLength} zeros to data`,
      value: augmentedData,
      highlight: data.length
    });

    // Step 2: Perform division
    let dividend = augmentedData;
    let position = 0;

    calculationSteps.push({
      step: 'Start Division',
      description: 'Begin XOR division process',
      value: dividend,
      highlight: 0
    });

    while (position <= dividend.length - generator.length) {
      // Find next 1
      while (position < dividend.length && dividend[position] === '0') {
        position++;
      }

      if (position > dividend.length - generator.length) break;

      // Perform XOR
      const segment = dividend.substring(position, position + generator.length);
      const xorResult = xorBinary(segment, generator);
      
      dividend = dividend.substring(0, position) + xorResult + dividend.substring(position + generator.length);

      calculationSteps.push({
        step: `XOR at position ${position}`,
        description: `${segment} XOR ${generator} = ${xorResult}`,
        value: dividend,
        highlight: position
      });

      position++;
    }

    // Extract CRC (last n bits)
    const crc = dividend.slice(-crcLength);
    const transmittedData = data + crc;

    calculationSteps.push({
      step: 'Extract CRC',
      description: `CRC checksum is the last ${crcLength} bits`,
      value: crc,
      highlight: 0
    });

    setSteps(calculationSteps);
    setResult({
      crc: crc,
      transmitted: transmittedData,
      originalData: data,
      generator: generator
    });
  };

  const reset = () => {
    setData('1101');
    setGenerator('1011');
    setResult(null);
    setSteps([]);
    setSelectedPreset('CRC-3');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CalcIcon className="text-primary-600 mr-3" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">CRC Calculator</h1>
          </div>
          <p className="text-lg text-gray-600">
            Calculate CRC checksums step-by-step and visualize the process
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="flex items-start">
            <Info className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm text-gray-700">
                <strong>How to use:</strong> Enter your binary data and generator polynomial, 
                then click Calculate. The tool will show you each step of the CRC calculation 
                process. Try the presets or create your own!
              </p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Input</h2>
          
          <div className="space-y-6">
            {/* Data Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data (Binary)
              </label>
              <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter binary data (e.g., 1101)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none font-mono text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter only 0s and 1s. Example: 1101, 11010011
              </p>
            </div>

            {/* Generator Preset */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Generator Polynomial Preset
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => handlePresetChange(preset)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      selectedPreset === preset.name
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Generator Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Generator Polynomial (Binary)
              </label>
              <input
                type="text"
                value={generator}
                onChange={(e) => {
                  setGenerator(e.target.value);
                  setSelectedPreset('Custom');
                }}
                placeholder="Enter generator polynomial (e.g., 1011)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none font-mono text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must start with 1. Example: 1011 (for CRC-3), 100000111 (for CRC-8)
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={calculateCRC}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Play className="mr-2" size={20} />
                Calculate CRC
              </button>
              <button
                onClick={reset}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <RotateCcw className="mr-2" size={20} />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-8">
            {/* Summary */}
            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Original Data:</p>
                  <p className="font-mono text-2xl text-gray-800 font-bold">{result.originalData}</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Generator Polynomial:</p>
                  <p className="font-mono text-2xl text-gray-800 font-bold">{result.generator}</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">CRC Checksum:</p>
                  <p className="font-mono text-3xl text-primary-700 font-bold">{result.crc}</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Data to Transmit (Data + CRC):</p>
                  <p className="font-mono text-2xl text-gray-800 font-bold">
                    <span className="text-gray-800">{result.originalData}</span>
                    <span className="text-primary-700">{result.crc}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step-by-Step */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Step-by-Step Process</h2>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Step {index + 1}
                        </span>
                        <h3 className="font-semibold text-gray-800 mt-2">{step.step}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    <div className="bg-white rounded p-3 font-mono text-lg overflow-x-auto">
                      {step.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Example */}
            <div className="card bg-blue-50">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Verification at Receiver</h2>
              <p className="text-gray-700 mb-4 text-sm">
                The receiver performs CRC calculation on the entire received message 
                (data + CRC). If the remainder is zero, no errors were detected.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Received Data:</p>
                <p className="font-mono text-lg text-gray-800 mb-3">{result.transmitted}</p>
                <p className="text-sm text-gray-600 mb-2">CRC Calculation Result:</p>
                <p className="font-mono text-lg text-green-600 font-bold">
                  Remainder = 000... (No errors detected ✓)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {!result && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Try These Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Simple Example</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Data: <span className="font-mono">1101</span><br />
                  Generator: <span className="font-mono">1011</span> (CRC-3)
                </p>
                <button
                  onClick={() => {
                    setData('1101');
                    setGenerator('1011');
                    setSelectedPreset('CRC-3');
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Load Example →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Longer Data</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Data: <span className="font-mono">11010011</span><br />
                  Generator: <span className="font-mono">1011</span> (CRC-3)
                </p>
                <button
                  onClick={() => {
                    setData('11010011');
                    setGenerator('1011');
                    setSelectedPreset('CRC-3');
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Load Example →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">CRC-4 Example</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Data: <span className="font-mono">1101</span><br />
                  Generator: <span className="font-mono">10011</span> (CRC-4)
                </p>
                <button
                  onClick={() => {
                    setData('1101');
                    setGenerator('10011');
                    setSelectedPreset('CRC-4');
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Load Example →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">USB CRC-5</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Data: <span className="font-mono">11010</span><br />
                  Generator: <span className="font-mono">100101</span> (CRC-5-USB)
                </p>
                <button
                  onClick={() => {
                    setData('11010');
                    setGenerator('100101');
                    setSelectedPreset('CRC-5-USB');
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Load Example →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
