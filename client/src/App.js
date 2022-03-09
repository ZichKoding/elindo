import logo from './logo.svg';
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
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
