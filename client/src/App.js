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
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
