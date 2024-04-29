import React, { useRef} from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Avatar from "../../../../components/Avatar";
import { useAppSelector } from "../../../../store";
import { callRequest } from "../../../../socket/socketConnection";
import ChatDropDown from "./ChatDropDown";

const MainContainer = styled("div")({
    width: "98.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "sticky",
    top: "0px",
    right: "0px",
    padding: "13px",
    borderRadius: "0px 0px 30px 30px",
    zIndex: "20",
    transition: "all 0.3s ease-in",
});


const NameWrapper = styled("div") (({ theme }) =>({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "25px",
      },
}));


const CallButtons = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

const MessagesHeader: React.FC<{
    scrollPosition: number;
}> = ({scrollPosition}) => {

    const navRef = useRef<HTMLDivElement>(null);
    let navPosition = navRef.current?.getBoundingClientRect().top;

    // const state = useAppSelector((state) => state);
    const {auth: {userDetails}, chat: {chosenChatDetails, chosenGroupChatDetails}, room: { isUserInRoom }} = useAppSelector((state) => state);
    // console.log(state);
    let name = ""
    
    if (chosenChatDetails?.username){
        name = chosenChatDetails.username
    } else if (chosenGroupChatDetails?.groupName) {
        name = chosenGroupChatDetails?.groupName
    }

    const navActiveStyle = scrollPosition >= navPosition! ? { backgroundColor: "#3b3486" } : { backgroundColor: "transparent" }; 


    return (
        <MainContainer style={navActiveStyle} ref={navRef}>
            <NameWrapper>
                <Avatar username={name} />
                <Typography
                    variant="h4"
                    sx={{
                        color: "white",
                        fontSize: "20px",
                        marginLeft: "10px",
                        marginRight: "5px",
                    }}
                >
                    {name}
                </Typography>
            </NameWrapper>
            
            {/* <Avatar username={name} /> */}
            {chosenChatDetails && (
                <CallButtons>
                    <IconButton
                        style={{ color: "white" }}
                        disabled={isUserInRoom}
                        onClick={() => {
                            callRequest({
                                audioOnly: true,
                                callerName: userDetails
                                    ? userDetails.username
                                    : "",
                                receiverUserId: chosenChatDetails?.userId!,
                            });
                        }}
                    >
                        <AddIcCallIcon />
                    </IconButton>

                    <IconButton
                        style={{ color: "white" }}
                        disabled={isUserInRoom}
                        onClick={() => {
                            callRequest({
                                audioOnly: false,
                                callerName: userDetails
                                    ? userDetails.username
                                    : "",
                                receiverUserId: chosenChatDetails?.userId!,
                            });
                        }}
                    >
                        <VideoCallIcon />
                    </IconButton>
                </CallButtons>
            )}

            <ChatDropDown />
        </MainContainer>
    );
};

export default MessagesHeader;
