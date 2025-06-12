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
  const location = useLocation();

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout mode={mode} handleModeChange={handleModeChange}>
            <FadeIn transitionDuration={700}>
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
