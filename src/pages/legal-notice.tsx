import React, { useState, useEffect } from "react";
import { Navigation, Footer } from "./../components";
import "./../index.scss";

type LegalNoticeProps = {
  mode: string;
  handleModeChange: () => void;
};

function LegalNotice({ mode, handleModeChange }: LegalNoticeProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <div style={{ padding: "2rem", paddingTop: "5rem", flex: 1 }}>
        <h2>Legal Notice</h2>
        <p>
          {/* Your legal info here */}
          Nessim Ben Ammar
          <br />
          [Your Address]
          <br />
          [Your Email]
          <br />
          [Other required legal info]
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default LegalNotice;
