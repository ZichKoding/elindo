import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
