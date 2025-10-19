import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import HowItWorks from './pages/HowItWorks';
import Applications from './pages/Applications';
import Calculator from './pages/Calculator';
import References from './pages/References';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
