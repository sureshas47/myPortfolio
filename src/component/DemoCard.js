import React from "react";
import { Img } from "../style/style.demo";

function DemoCard({ title, image, image2 }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid lightgray",
        }}
      >
        <Img src={image} alt="" />

        <strong style={{ color: "darkorange", marginTop: "10px" }}>
          {title}
        </strong>
      </div>
    </>
  );
}

export default DemoCard;
