import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Products from './pages/Products';
import VanePumps from './pages/VanePumps';
import GearPumps from './pages/GearPumps';
import GerolerMotors from './pages/GerolerMotors';
import VaneMotors from './pages/VaneMotors';
import FlowMeters from './pages/FlowMeters';
import DirectionalControlValves from './pages/DirectionalControlValves';
import FlowControlValves from './pages/FlowControlValves';
import Manifolds from './pages/Manifolds';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav />
        </header>

        <Routes>

          <Route path="/" element={<Homepage />} />

          <Route path="/Products" element={<Products />} />
            <Route path="/Products/VanePumps" element={<VanePumps />} />
            <Route path="/Products/GearPumps" element={<GearPumps />} />
            <Route path="Products/GerolerMotors" element={<GerolerMotors />} />
            <Route path="/Products/VaneMotors" element={<VaneMotors />} />
            <Route path="/Products/FlowMeters" element={<FlowMeters />} />
            <Route path="/Products/DirectionalControlValves" element={<DirectionalControlValves />} />
            <Route path="/Products/FlowControlValves" element={<FlowControlValves />}  />
            <Route path="/Products/Manifolds" element={<Manifolds />} />
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
