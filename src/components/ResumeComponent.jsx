// import resumePDF from "../assets/AndreaAnzaResume.pdf";
import "../css/aboutMe.css";

function ResumeComponent() {
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
          href="https://drive.google.com/uc?export=1XRB9Y1AZgoXQgVRrHEuvurnnMX2_4i7i"
        >
          <span className="actual-text">&nbsp;Download&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Download&nbsp;
          </span>
        </a>
      </div>
    </div>
  );
}

export default ResumeComponent;
