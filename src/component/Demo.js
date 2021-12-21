import React from "react";
import { MyWorkExperience } from "../style/style.work";
import DemoCard from "./DemoCard";
import image from "../assets/Images/cart.png";
import image2 from "../assets/Images/clone.png";

function Demo() {
  return (
    <>
      <MyWorkExperience style={{ backgroundColor: "#cff1ff" }}>
        <h1>Demo Projects</h1>
        <div
          style={{
            backgroundColor: "white",
            padding: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          <DemoCard
            title="Netflix-Clone"
            image="https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/145653005_1304060596645439_6153863589767989059_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b9115d&_nc_ohc=S432fFEqkoEAX_9BkM3&_nc_oc=AQmk1igiWsVsLlRubAuMnl4cyRk6Kz5kyN2DnfnVT_Mgq-u1yO2n0vPd6p5Aaqi4tDU&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT-sG22Sm1cj8EoRUjajQhEeWtWru7WFFneM6FxHejPc8A&oe=61E8C4AF"
          />
          <DemoCard title="Electronic-Shop" image={image} />
          <DemoCard title="Nepasoft-App-Clone" image={image2} />
        </div>
      </MyWorkExperience>
    </>
  );
}

export default Demo;
