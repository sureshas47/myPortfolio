import React from "react";
import { Img } from "../style/style.demo";

function DemoCart({ title }) {
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
        <Img
          src="https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/145653005_1304060596645439_6153863589767989059_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b9115d&_nc_ohc=S432fFEqkoEAX_9BkM3&_nc_oc=AQmk1igiWsVsLlRubAuMnl4cyRk6Kz5kyN2DnfnVT_Mgq-u1yO2n0vPd6p5Aaqi4tDU&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT-sG22Sm1cj8EoRUjajQhEeWtWru7WFFneM6FxHejPc8A&oe=61E8C4AF"
          alt=""
        />
        <strong style={{ color: "darkorange", marginTop: "10px" }}>
          {title}
        </strong>
      </div>
    </>
  );
}

export default DemoCart;
