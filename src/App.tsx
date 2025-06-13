import { useState, useEffect } from "react";
import { useLocation, Routes, Route, useNavigationType } from "react-router-dom";
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
  const [shouldFadeIn, setShouldFadeIn] = useState<boolean>(true);
  const location = useLocation();
  const navigationType = useNavigationType();

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    if (navigationType === "POP") return;
    if (location.pathname === "/") {
      const target = sessionStorage.getItem("scrollTarget");
      if (target) {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollTarget");
      } else if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const savedPosition = sessionStorage.getItem("scrollPosition");
        if (savedPosition) {
          const pos = parseInt(savedPosition, 10);
          if (shouldFadeIn) {
            setSavedScrollPosition(pos);
          } else {
            window.scrollTo({ top: pos, left: 0, behavior: "smooth" });
          }
          sessionStorage.removeItem("scrollPosition");
        }
      }
    }
  }, [location, shouldFadeIn, navigationType]);

  const handleFadeInComplete = () => {
    if (savedScrollPosition !== null) {
      window.scrollTo({
        top: savedScrollPosition,
        left: 0,
        behavior: "smooth",
      });
      setSavedScrollPosition(null);
    }
    setShouldFadeIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout mode={mode} handleModeChange={handleModeChange}>
            {shouldFadeIn ? (
              <FadeIn
                transitionDuration={700}
                onComplete={handleFadeInComplete}
              >
                <Main />
                <Expertise />
                <Experience />
                <Portfolio />
                <Contact />
              </FadeIn>
            ) : (
              <>
                <Main />
                <Expertise />
                <Experience />
                <Portfolio />
                <Contact />
              </>
            )}
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
