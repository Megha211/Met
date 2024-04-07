import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Robot from "./robot.gif"; // #6f61c0 #4a4aae #3b3486

const Wrapper = styled("div")({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    textAlign: "center"
});

const WelcomeMessage = () => {
    return (
        <Wrapper>
            <img src={Robot} alt="robot greeting welcome" style={{ height: "15rem" }}/>
            <Typography variant="h6" sx={{ color: "white" }}>
                To start chatting - select a friend for conversation
            </Typography>
        </Wrapper>
    );
};

export default WelcomeMessage;