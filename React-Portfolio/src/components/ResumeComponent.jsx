import React from "react";
import resumePDF from "../assets/AndreaRamirezAnzaResume.pdf";

function ResumeComponent() {
  return (
    <div className="flex justify-center">
      <object data={resumePDF} width="1600" height="800"></object>
    </div>
  );
}

export default ResumeComponent;
