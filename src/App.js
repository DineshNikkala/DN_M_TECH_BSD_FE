import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomeComponent from "./Components/HomeComponent/HomeComponent";
import OutputComponent from "./Components/OutputComponent/OutputComponent";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Root</Link>
            </li>
            <li>
              <Link to="/home">Home Component</Link>
            </li>
            <li>
              <Link to="/out">Output Component</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/out" element={<OutputComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
