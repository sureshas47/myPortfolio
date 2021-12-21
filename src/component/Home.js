import React from "react";
import { Wrapper, Img, Button } from "../style/style.home";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import MyWork from "./MyWork";
import Demo from "./Demo";
import Academic from "./Academic";
// import MailIcon from "@mui/icons-material/Mail";

function Home() {
  return (
    <>
      <Wrapper>
        <Img
          src="https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/255020457_4243498489109514_8938440116557058491_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_1G_Aj81zxEAX-LaeOx&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT_r5GDiDgbcWiKVftZDBfLHs3X16XTwz9f3GUBneYOoTQ&oe=61C741B5"
          alt=""
        />
        <p style={{ color: "white" }}>
          <h3> Suresh Adhikari</h3>
          <small>connect-with-me</small>
        </p>
        <div>
          <a
            href="https://www.facebook.com/suresh.adhikari.52/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon
              style={{
                borderRadius: "100%",
                fontSize: 50,
                color: "white",
                cursor: "pointer",
              }}
              fontSize="small"
            />
          </a>
          <a
            href="https://github.com/sureshas47"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub
              style={{
                borderRadius: "100%",
                fontSize: 50,
                color: "white",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/suresh-adhikari-4a96b5114/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn
              style={{
                borderRadius: "100%",
                fontSize: 50,
                color: "white",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://adh.suresh47@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="Gmail"
          >
            <MailIcon
              // color="secondary"
              style={{
                borderRadius: "100%",
                fontSize: 50,
                cursor: "pointer",
                color: "white",
              }}
            />
          </a>
        </div>
        <Button alt="Explore Me">Explore Me</Button>
      </Wrapper>
      <MyWork />
      <Demo />
      <Academic />
    </>
  );
}

export default Home;
