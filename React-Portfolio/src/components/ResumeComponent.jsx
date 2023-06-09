import React from "react";
import resumePDF from "../assets/AndreaAnzaResume.pdf";

function ResumeComponent() {
  return (
    <div className="flex justify-center">
      <object data={resumePDF} width="1600" height="800"></object>
    </div>
  );
}

export default ResumeComponent;
