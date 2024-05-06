import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { useAppSelector } from "../../../store";
import {
  notifyTyping,
  sendDirectMessage,
  sendGroupMessage,
} from "../../../socket/socketConnection";
import { Button, IconButton } from "@mui/material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import SendIcon from "@mui/icons-material/Send";

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
  right: "10px",
});

const NewMessageInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const { chosenChatDetails, chosenGroupChatDetails } = useAppSelector(
    (state) => state.chat
  );

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
        groupChatId: chosenGroupChatDetails.groupId,
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
    setMessage(e.target.value);
  };

  const handleTogglePicker = () => {
    if (isPickerVisible) {
      setPickerVisible(false);
      const input = inputRef.current;
      input?.focus(); // Set focus back to the input field
      input?.setSelectionRange(input.value.length, input.value.length); // Set cursor position to the end

    } else {
      setPickerVisible(true);
    }
  };

  const handleEmojiSelect = (emojiObject: any) => {
    const emoji = emojiObject.native;
    setMessage((prevMessage) => prevMessage + emoji);
    // setPickerVisible(false); 
  };

  const handleClickOutsidePicker = (event: MouseEvent) => {
    const emojiButton = document.querySelector("#emojiButton");
  
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target as Node) &&
      event.target !== emojiButton
    ) {
      setPickerVisible(false);
      const input = inputRef.current;
      input?.focus(); // Set focus back to the input field
      input?.setSelectionRange(input.value.length, input.value.length); // Set cursor position to the end
    }
  };
  
  const handleTouchOutsidePicker = (event: TouchEvent) => {
    const emojiButton = document.querySelector("#emojiButton");
  
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target as Node) &&
      event.target !== emojiButton
    ) {
      setPickerVisible(false);
      const input = inputRef.current;
      input?.focus(); // Set focus back to the input field
      input?.setSelectionRange(input.value.length, input.value.length); // Set cursor position to the end
    }
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsidePicker);
    document.addEventListener("touchstart", handleTouchOutsidePicker);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePicker);
      document.removeEventListener("touchstart", handleTouchOutsidePicker);
    };
  }, []);
  

  useEffect(() => {
    if (chosenChatDetails?.userId) {
      notifyTyping({
        receiverUserId: chosenChatDetails.userId!,
        typing: focused,
      });
    }
    setPickerVisible(false)
  }, [focused, chosenChatDetails?.userId, chosenChatDetails]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <MainContainer >
      <Input
        ref={inputRef}
        placeholder={
          chosenChatDetails
            ? `Write message to ${chosenChatDetails.username}`
            : "Your message..."
        }
        value={message}
        onChange={handleChange}
        onKeyDown={handleSendMessage}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          margin: "0px 0px 0px 10px",
          position: "relative", // Added to make the button position relative to the input
        }}
      />
      {/* Emoji Button */}
      <Button
        id="emojiButton"
        onClick={handleTogglePicker}
        variant="contained"
        style={{
          backgroundColor: "transparent",
          height: "40px",
          boxShadow: "none",
          fontSize: "28px",
          position: "absolute", // Positioned absolutely within the input
          right: "27px", // Adjust the position as needed
          bottom: "12px"
        }}
      >
        {/* <EmojiEmotionsOutlinedIcon /> */}
        ☺
      </Button>

      {/* Emoji Picker */}
      <EmojiPickerContainer ref={emojiPickerRef}>
        {isPickerVisible && (
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={handleEmojiSelect}
          />
        )}
      </EmojiPickerContainer>

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
        style={{
          color: "white",
          margin: "0px 5px 0px 0px",
          paddingRight: "3px",
        }} // Adjusted styles
      >
        <SendIcon />
      </IconButton>
    </MainContainer>
  );
};

export default NewMessageInput;
