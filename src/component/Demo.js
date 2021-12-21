import React from "react";
import { MyWorkExperience } from "../style/style.work";
import DemoCart from "./DemoCart";
import { Img } from "../style/style.work";

function Demo() {
  return (
    <>
      <MyWorkExperience style={{ backgroundColor: "#cff1ff" }}>
        <h1>My Demo</h1>
        <div
          style={{
            backgroundColor: "white",
            padding: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          <DemoCart title="Netflix-Clone" />
          <DemoCart title="Todo-App-Clone" />
          <DemoCart title="Weather-App-Clone" />
        </div>
      </MyWorkExperience>
    </>
  );
}

export default Demo;
