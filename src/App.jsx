import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomeDisplay from "./Components/Home/HomeDisplay";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import i18n from "./i18n";

const App = () => {
  // for i18n 
  const [lang, setLang] = useState(i18n.language);

  const updateDirection = (language) => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  };

  useEffect(() => {
    const onLanguageChange = () => {
      setLang(i18n.language);
      updateDirection(i18n.language);
      console.log("Language changed to:", i18n.language);
    };

    // Initial direction setup
    updateDirection(i18n.language);

    // Watch for changes to the i18n.language property
    i18n.on("languageChanged", onLanguageChange);

    // Remove the event listener when the component unmounts
    return () => {
      i18n.off("languageChanged", onLanguageChange);
    };
  }, []);

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
      <Footer />
    </Router>
  );
};

export default App;
