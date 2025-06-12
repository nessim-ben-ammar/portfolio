import { useEffect } from "react";
import { PageLayout } from "../components";
import "./../index.scss";
import "./../assets/styles/Contact.scss";
import Envelope from "@mui/icons-material/Email";

type LegalNoticeProps = {
  mode: string;
  handleModeChange: () => void;
};

function LegalNotice({ mode, handleModeChange }: LegalNoticeProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <PageLayout mode={mode} handleModeChange={handleModeChange} isSubPage>
      <div id="legal">
        <div className="items-container">
          <div className="contact_wrapper">
            <div style={{ padding: "2rem", paddingTop: "5rem", flex: 1 }}>
              <h1>Legal Notice</h1>
              <p>
                Nessim Ben Ammar
                <br />
                In der Breite 34
                <br />
                79224 Umkirch, Germany
                <br />
                <a href="mailto:nessim.benammar@gmail.com">
                  <Envelope />
                  nessim.benammar@gmail.com
                </a>
              </p>

              <h3>Disclaimer – Content</h3>
              <p>
                The content on this website has been created with care and is
                intended for general information purposes only. I do not
                guarantee the accuracy, completeness, or timeliness of the
                information provided. I reserve the right to change or remove
                content without prior notice.
              </p>

              <h3>Disclaimer – External Links</h3>
              <p>
                This website may contain links to external websites. I have no
                control over the content of those sites and am not responsible
                for any information or material found there. The inclusion of
                any links does not imply endorsement. If any linked content is
                found to be unlawful, I will remove it as soon as I become aware
                of it.
              </p>

              <h3>Copyright</h3>
              <p>
                All content and materials on this website are protected by
                copyright laws. Any use beyond personal browsing, including
                reproduction or distribution, requires prior written permission.
                Third-party content is acknowledged and remains the intellectual
                property of its respective owners.
              </p>

              <h3>Privacy</h3>
              <p>
                This website does not collect personal data or use tracking
                technologies. If you contact me via email, your information will
                be treated confidentially and not shared with third parties
                without consent. A secure HTTPS connection is used to protect
                data in transit, but please note that email communication is not
                fully secure by default.
              </p>

              <h3>Unsolicited Contact</h3>
              <p>
                The use of contact details published here for marketing purposes
                is not permitted. Unsolicited emails, spam, or advertising will
                be reported and may result in legal action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default LegalNotice;
