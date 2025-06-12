import { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import {
  Contact,
  Experience,
  Expertise,
  FadeIn,
  Main,
  PageLayout,
  Portfolio,
} from "./components";
import { Legal, Project } from "./pages";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");
  const [savedScrollPosition, setSavedScrollPosition] = useState<number | null>(
    null
  );
  const location = useLocation();

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const savedPosition = sessionStorage.getItem("scrollPosition");
        if (savedPosition) {
          const pos = parseInt(savedPosition, 10);
          window.scrollTo({ top: pos, left: 0 });
          setSavedScrollPosition(pos);
          sessionStorage.removeItem("scrollPosition");
        }
      }
    }
  }, [location]);

  const handleFadeInComplete = () => {
    if (savedScrollPosition !== null) {
      window.scrollTo({ top: savedScrollPosition, left: 0 });
      setSavedScrollPosition(null);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout mode={mode} handleModeChange={handleModeChange}>
            <FadeIn transitionDuration={700} onComplete={handleFadeInComplete}>
              <Main />
              <Expertise />
              <Experience />
              <Portfolio />
              <Contact />
            </FadeIn>
          </PageLayout>
        }
      />
      <Route
        path="/:projectId"
        element={<Project mode={mode} handleModeChange={handleModeChange} />}
      />
      <Route
        path="/legal-notice"
        element={<Legal mode={mode} handleModeChange={handleModeChange} />}
      />
    </Routes>
  );
}

export default App;
