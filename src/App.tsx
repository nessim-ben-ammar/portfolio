import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import LegalNotice from "./pages/legal-notice";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Router basename="/portfolio">
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={`main-container ${
                mode === "dark" ? "dark-mode" : "light-mode"
              }`}
            >
              <Navigation
                parentToChild={{ mode }}
                modeChange={handleModeChange}
              />
              <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project />
                <Contact />
              </FadeIn>
              <Footer />
            </div>
          }
        />
        <Route
          path="/legal-notice"
          element={
            <LegalNotice mode={mode} handleModeChange={handleModeChange} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
