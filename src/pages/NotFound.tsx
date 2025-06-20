import { useEffect } from "react";
import { PageLayout } from "../components";

interface NotFoundProps {
  mode: string;
  handleModeChange: () => void;
}

function NotFound({ mode, handleModeChange }: NotFoundProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <PageLayout mode={mode} handleModeChange={handleModeChange} isSubPage>
      <div style={{ padding: "2rem" }}>
        <h1>Page Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </div>
    </PageLayout>
  );
}

export default NotFound;
