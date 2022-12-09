import React from "react";
import Bar from "../components/Bar";
import sidelogo from "../assets/images/side-logo.png";
import { Container } from "@mui/material";

const HowItWork = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "-100",
        width: "100%",
        left: "0",
        top: "0px",
        backgroundColor: "black",
        // height: 'calc(100% - 50px)',
        height: "100%",
        objectFit: "cover",
        // padding: "24px",

        // opacity: "0.5",
      }}
    >
      <>
        <img
          src="https://i.postimg.cc/VNWQ5TsV/63erfefefe80020.png"
          style={{
            position: "absolute",
            zIndex: "-100",
            width: "100%",
            height: "100%",
            left: "0",
            objectFit: "contain",
            backgroundColor: "black",
            opacity: "0.5",
          }}
        />
        <Bar />
        <Container
          maxWidth="sm"
          style={{
            padding: "48px",
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
            backdropFilter: "blur(5px)",
            position: "relative",
            top: "150px",
            background: `rgba(255, 255, 255, 0.2)`,

            border: `1px solid rgba(255, 255, 255, 0.3)`,
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            How It Works
          </h1>
          <ol
            style={{
              color: "white",
            }}
          >
            <li>
              Before installing DockSec please make sure to install Docker and
              python 3 on the relevant host machine.
            </li>
            <li>
              Go to the GitHub repository from the following link :
              https://github.com/isp4proj/tool
            </li>
            <li>Copy the Git code and go to the host machine terminal.</li>
            <li>
              {" "}
              Execute the following commands on the terminal:
              <b
                style={{
                  fontWeigth: "900",
                  color: "red",
                }}
              >
                git clone https://github.com/isp4proj/tool
              </b>{" "}
            </li>
            <li>
              After cloning the tool, change directory to tool by:{" "}
              <b
                style={{
                  fontWeigth: "900",
                  color: "red",
                }}
              >
                cd tool
              </b>
            </li>{" "}
            <li>
              {" "}
              Then list the files inside the tool folder by:{" "}
              <b
                style={{
                  fontWeigth: "900",
                  color: "red",
                }}
              >
                ls
              </b>{" "}
            </li>
            <li>
              {" "}
              Then change the read write permissions to the main python file
            </li>
            <li>
              Then run the tool :{" "}
              <b
                style={{
                  fontWeigth: "900",
                  color: "red",
                }}
              >
                sudo python3 main.py
              </b>{" "}
            </li>
          </ol>
        </Container>
      </>
    </div>
  );
};

export default HowItWork;
