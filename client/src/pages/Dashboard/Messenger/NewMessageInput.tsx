import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { useAppSelector } from "../../../store";
import { notifyTyping, sendDirectMessage, sendGroupMessage } from "../../../socket/socketConnection";
import { Button, IconButton } from "@mui/material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import SendIcon from '@mui/icons-material/Send';

const MainContainer = styled("div")({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Position relative for the container
});

const Input = styled("input")({
    backgroundColor: "#3b3486", 
    width: "98%",
    height: "44px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "0 10px",
});

const EmojiPickerContainer = styled("div")({
    position: "absolute",
    bottom: "60px", 
    right: "10px"
});

const NewMessageInput: React.FC = () => {
    const [message, setMessage] = useState("");
    const [focused, setFocused] = useState(false);
    const [isPickerVisible, setPickerVisible] = useState(false);

    const { chosenChatDetails, chosenGroupChatDetails } = useAppSelector((state) => state.chat);

    const emojiPickerRef = useRef<HTMLDivElement>(null);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const sendMessage = () => {
        if (chosenChatDetails) {
            sendDirectMessage({
                message,
                receiverUserId: chosenChatDetails.userId!,
            });
        }
    
        if (chosenGroupChatDetails) {
            sendGroupMessage({
                message,
                groupChatId: chosenGroupChatDetails.groupId
            });
        }
    
        setMessage("");
    };
    
    const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };
    
    const handleSendMessageButton = () => {
        sendMessage();
    };
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    };

    const handleTogglePicker = () => {
        if (isPickerVisible) {
            setPickerVisible(false);
        } else {
            setPickerVisible(true);
        }
    };    
    
    const handleEmojiSelect = (emojiObject: any) => {
        const emoji = emojiObject.native;
        setMessage(prevMessage => prevMessage + emoji);
        setPickerVisible(false); // Close the picker after selecting an emoji
    };

    const handleClickOutsidePicker = (event: MouseEvent) => {
        const emojiButton = document.querySelector("#emojiButton"); // Assuming the button has an id "emojiButton"
    
        if (
            emojiPickerRef.current &&
            !emojiPickerRef.current.contains(event.target as Node) &&
            event.target !== emojiButton
        ) {
            setPickerVisible(false);
        }
    };
    

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsidePicker);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsidePicker);
        };
    }, []);

    useEffect(() => {
        if (chosenChatDetails?.userId) {
            notifyTyping({
                receiverUserId: chosenChatDetails.userId!,
                typing: focused,
            });
        }
    }, [focused, chosenChatDetails?.userId]);

    return (
        <MainContainer>
            <Input
                placeholder={chosenChatDetails ? `Write message to ${chosenChatDetails.username}` : "Your message..."}
                value={message}
                onChange={handleChange}
                onKeyDown={handleSendMessage}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {/* <Button variant="contained" 
                color="primary" 
                onClick={handleSendMessageButton}
                style={{"backgroundColor":"black", height:"45px", 
                margin: "0px 0px 0px 5px", padding:"0px"}}  
                startIcon={<SendIcon />}>
                Send
            </Button> */}

            <IconButton
                id="sendButton"
                onClick={handleSendMessageButton}
                aria-label="send"
                style={{ color: "white", margin: "0px 0px 0px 5px", padding: 0 }} // Adjusted styles
            >
                <SendIcon />
            </IconButton>

            <EmojiPickerContainer ref={emojiPickerRef}>
                {isPickerVisible && (
                    <Picker 
                        data={data} 
                        previewPosition="none" 
                        onEmojiSelect={handleEmojiSelect} />
                )}
            </EmojiPickerContainer>
            <Button id="emojiButton" onClick={handleTogglePicker} 
                variant="contained" 
                style={{backgroundColor:"transparent", height:"45px", 
                margin: "0px 0px", boxShadow: "none", fontSize: "25px",}} 
                >
                    😄
            </Button>
        </MainContainer>
    );
};

export default NewMessageInput;
