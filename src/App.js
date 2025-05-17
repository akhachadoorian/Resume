// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';
import './css/components.css';
import './css/general.css';
import './css/Home.css';

import Home from './pages/Home';



function App() {
  return (
    <Router>
        {/* <Navigation /> */}
          <Routes>
              <Route path="/Resume" element={<Home />} />
          </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
