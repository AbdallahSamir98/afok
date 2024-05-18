import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomeDisplay from "./Components/Home/HomeDisplay";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeDisplay />} />
          <Route path="/home" element={<HomeDisplay />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
