import Navigation from "./Navigation";
import Footer from "./Footer";

type PageLayoutProps = {
  mode: string;
  handleModeChange: () => void;
  isSubPage?: boolean;
  children: React.ReactNode;
};

function PageLayout({
  mode,
  handleModeChange,
  isSubPage,
  children,
}: PageLayoutProps) {
  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation
        parentToChild={{ mode }}
        modeChange={handleModeChange}
        isSubPage={isSubPage}
      />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
