import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import LOGO from "../image/logo.png";
import BG from "../image/bg.png";
import F1 from "../image/1.png";
import F2 from "../image/2.png";
import F3 from "../image/3.png";

import { Translate, Visibility } from "@mui/icons-material";

interface AuthBoxProps {
  children?: ReactNode;
}

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient( to bottom, #d6cbf1, #8e92e3 )",
});

const Container = styled("div")({
  background: "#f5f6f7",
  height: "80px",
  width: "290px",
  borderRadius: "10px",
  zIndex: "1",
  position: "absolute",
  top: "30%",
  right: "12%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "1.25%",
  '@media (max-width:600px)': {
    visibility: "hidden",
  },
});

const Image = styled("img")({
  height: "50px",
  width: "50px",
});

const Title = styled("p")({
  fontWeight: "700",
  fontSize: "12px",
});

const Subtitle = styled("p")({
  fontSize: "12px",
});

const IMG = styled("img")({
  height: "100px",
  width: "100px",
  position: "absolute",
  top: "12%",
  left: "25%",
  '@media (max-width:600px)': {
    left: "39%",
  },
  zIndex: "2",
});

const Tagline = styled("p")({
  fontWeight: "700",
  marginTop: "0",
  fontSize: "12px",
  position: "absolute",
  left: "23%",
  top: "24%",
  '@media (max-width:600px)': {
    top : "25%",
    left: "33%",
  },
});

const AuthBox: React.FC<AuthBoxProps> = (props) => {
  return (
    <BoxWrapper>
      <div
        style={{
          height: "25%",
          width: "40%",
          display: "flex",
          zIndex: "2",
        }}
      >
        <IMG
          src={LOGO}
          alt="hello"
        />
        <Tagline>Where Possibilities Meet Reality </Tagline>
      </div>
      <Box
        sx={{
          zIndex: "2",
          position: "absolute",
          top: "29%",
          left: "14%",
          width: "30%",
          '@media (max-width:600px)': {
            width: "70%",
            height: "55%",
          },
          height: "50%",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba( 225, 205, 239, 0.15 )",
          boxShadow: "0 28px 38px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          border: "1px solid #fff",
        }}
      >
        {props.children}
      </Box>
      <div>
        <img
          src={BG}
          alt="background"
          style={{
            height: "90%",
            width: "90%",
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
        />
      </div>
      <Box
        sx={{
          width: "85vw",
          height: "88vh",
          // bgcolor: "#36393f",
          background: "rgba(255,255,255, 0.42)",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255, 0.18)",
          boxShadow: "0 8px 32px 0 rgb(31 38 135 , 0.97)",
          backdropFilter: "blur(23px)",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   padding: "25px",
          //   marginLeft: "10px",
        }}
      ></Box>
      <Container>
        <div>
          <Image src={F1} alt="" />
        </div>
        <div>
          <Title>Express yourself beyond emojies</Title>
          <Subtitle>Why limit yourself with those 5 emojis, express freely with MET</Subtitle>
        </div>
      </Container>
      <Container style={{ top: "47%" }}>
        <div>
          <Image src={F2} alt="" />
        </div>
        <div>
          <Title>Connect with the world</Title>
          <Subtitle>Connect with people from all around the world</Subtitle>
        </div>
      </Container>
      <Container style={{ top: "64%" }}>
        <div>
          <Image src={F3} alt="" />
        </div>
        <div>
          <Title>Share your thoughts</Title>
          <Subtitle>Share your thoughts with the world</Subtitle>
        </div>
      </Container>
    </BoxWrapper>
  );
};

export default AuthBox;
