// import resumePDF from "../assets/AndreaAnzaResume.pdf";
import "../css/aboutMe.css";
import { ToastContainer, useToast } from "@rewind-ui/core";

function ResumeComponent() {
  const toast = useToast();
  return (
    // <div className="flex justify-center">
    //   <object data={resumePDF} width="1600" height="800"></object>
    // </div>
    <div>
      <div className="flex justify-center py-6">
        <iframe
          src="https://drive.google.com/file/d/1XRB9Y1AZgoXQgVRrHEuvurnnMX2_4i7i/preview"
          width="70%"
          height="700"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <a
          data-text="Awesome"
          className="button"
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
              title: "Download complete!",
              tone: "solid",
            });
          }}
        >
          <span className="actual-text">&nbsp;Download&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Download&nbsp;
          </span>
        </a>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default ResumeComponent;
