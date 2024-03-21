import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import LOGO from "../image/logo.png";
import BG from "../image/bg.png";
import F1 from "../image/1.png";
import F2 from "../image/2.png";
import F3 from "../image/3.png";

import { Translate } from "@mui/icons-material";

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
        <img
          src={LOGO}
          alt="hello"
          style={{
            height: "100px",
            width: "100px",
            position: "absolute",
            top: "12%",
            left: "25%",
            zIndex: "2",
          }}
        />
        <p
          style={{
            fontWeight: "700",
            marginTop: "0",
            fontSize: "12px",
            position: "absolute",
            left: "23%",
            top: "24%",
          }}
        >
          Where Possibilities Meet Reality
        </p>
      </div>
      <Box
        sx={{
          zIndex: "2",
          position: "absolute",
          top: "29%",
          left: "14%",
          width: "30%",
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
      <div
        style={{
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
        }}
      >
        <div>
          <img
            src={F1}
            alt=""
            style={{
              height: "50px",
              width: "50px",
              // margin: "15px 2px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "12px",
              // margin: " 12px 15px ",
            }}
          >
            Express yourself beyond emojies
          </p>
          <p
            style={{
              fontSize: "12px",
              // margin: "5px 15px",
            }}
          >
            Why limit yourself with those 5 emojis, express freely with MET
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#f5f6f7",
          height: "80px",
          width: "290px",
          borderRadius: "10px",
          zIndex: "1",
          position: "absolute",
          top: "47%",
          right: "12%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1.25%",
        }}
      >
        <div>
          <img
            src={F2}
            alt=""
            style={{
              height: "50px",
              width: "50px",
              // margin: "15px 2px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "12px",
              // margin: " 12px 15px ",
            }}
          >
            Personalized chill zone
          </p>
          <p
            style={{
              fontSize: "12px",
              // margin: "5px 15px",
            }}
          >
            Make your own private rooms with your beloved friends
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#f5f6f7",
          height: "80px",
          width: "290px",
          borderRadius: "10px",
          zIndex: "1",
          position: "absolute",
          top: "64%",
          right: "12%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1.25%",
        }}
      >
        <div>
          <img
            src={F3}
            alt=""
            style={{
              height: "50px",
              width: "50px",
              // margin: "15px 2px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "12px",
              // margin: " 12px 15px ",
            }}
          >
            Spice up your presentation
          </p>
          <p
            style={{
              fontSize: "12px",
              // margin: "5px 15px",
            }}
          >
            MET is designed to make your presentation as smooth as possible
          </p>
        </div>
      </div>
    </BoxWrapper>
  );
};

export default AuthBox;
