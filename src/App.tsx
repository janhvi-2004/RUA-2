import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.module.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* inside Banner */}
          {/* <Route path="services" element={<Services />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App
