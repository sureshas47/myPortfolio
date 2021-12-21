import React from "react";
import { MyWorkExperience, Img } from "../style/style.work";

function MyWork() {
  return (
    <>
      <MyWorkExperience>
        <Img
          src="https://www.wikihow.com/images/thumb/6/6d/Make-a-Cartoon-Step-4-Version-3.jpg/v4-460px-Make-a-Cartoon-Step-4-Version-3.jpg"
          alt="MyWork"
        />
        <h1>My Work</h1>

        <div
          style={{
            backgroundColor: "white",
            color: "#ff5f00",
            lineHeight: "35px",
            borderRadius: "15px",
            padding: "40px",
            fontSize: "18px",
            alignContent: "start",
          }}
        >
          <strong>
            Prismasoft Pvt.Ltd. - INTERN March 2021 - May 2021, New Baneshwor
          </strong>

          <li>
            Organized and implemented new features to maximize the effectiveness
            of running web applications.
          </li>
          <li>Worked with the team to establish a more efficient code.</li>
          <li>Pay attention to details in the job with smart work.</li>
          <li>Building the wireframes of proposed project using Figma.</li>
          <li>
            Learned new skills like research, problem-solving, and hard work.
          </li>
          <li>Managed the build process, deployed code to staging. </li>
          <li>Developed a user-friendly front end for a legacy.</li>
        </div>
      </MyWorkExperience>
    </>
  );
}

export default MyWork;
