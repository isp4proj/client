import React from "react";
import Bar from "../components/Bar";
import sidelogo from "../assets/images/side-logo.png";
import { Container } from "@mui/material";

const AboutUs = () => {
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
            About Us
          </h1>
          <p
            style={{
              color: "white",
            }}
          >
            We developed this security tool for the project of Information
            Security Module (ISP) of Sri Lanka Institute of Information
            Technology. This tool can check the compliance of Docker host
            machine and give Remediation’s and categorize identified risk
            levels. We are thinking our tool is more reliable and User-friendly.
            Use this tool for only Ethical and Educational purposes. Developed
            by: S.Y.B. Wijerathne & W.S.B. Fonseka. Specialization - Cyber
            Security, 3 rd Year – 2 nd Semester
          </p>
        </Container>
      </>
    </div>
  );
};

export default AboutUs;
