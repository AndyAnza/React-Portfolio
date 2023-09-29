import "../css/greenButton.css";

import "../css/loader.css";
import "../css/resume.css";
import { ToastContainer, useToast } from "@rewind-ui/core";
import { useState } from "react";

function ResumeComponent() {
  const toast = useToast();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div>
      <div className="container-margin flex justify-center">
        <a
          data-text="Awesome"
          className="greenButton"
          href="https://drive.google.com/uc?export=download&id=1XRB9Y1AZgoXQgVRrHEuvurnnMX2_4i7i"
          download="AndreaAnzaResume.pdf"
          onClick={() => {
            toast.add({
              id: "unique-id",
              closeOnClick: true,
              color: "green",
              description: "",
              duration: 2000,
              iconType: "success",
              pauseOnHover: true,
              radius: "md",
              shadow: "none",
              shadowColor: "green",
              showProgress: true,
              title: "Success!",
              tone: "solid",
            });
          }}
        >
          <span className="actual-text">&nbsp;Download&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Download&nbsp;
          </span>
        </a>
        <ToastContainer position="bottom-right" className="toaster" />
      </div>
      {!iframeLoaded ? (
        <div className="loader-container">
          <div className="loader">
            <div className="cell d-0"></div>
            <div className="cell d-1"></div>
            <div className="cell d-2"></div>

            <div className="cell d-1"></div>
            <div className="cell d-2"></div>

            <div className="cell d-2"></div>
            <div className="cell d-3"></div>

            <div className="cell d-3"></div>
            <div className="cell d-4"></div>
          </div>
        </div>
      ) : null}

      <div className="resume-container">
        <iframe
          src="https://drive.google.com/file/d/1XRB9Y1AZgoXQgVRrHEuvurnnMX2_4i7i/preview"
          width="70%"
          height="700"
          onLoad={() => setIframeLoaded(true)}
          className={`${iframeLoaded ? "square-in-hesitate" : "hidden"}`}
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeComponent;
