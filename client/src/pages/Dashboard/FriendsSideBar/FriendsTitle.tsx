import React from "react";
import { Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupsIcon from "@mui/icons-material/Groups";

const FriendsTitle = ({ title }: { title: string }) => {
    return (
        <Typography
            sx={{
                textTransform: "uppercase",
                color: "white",
                fontSize: "14px",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            {title === "Friends" ? (
                <MailIcon />
            ) : title === "Group Chats" ? (
                <GroupsIcon />
            ) : title === "Active Rooms" ? (
                <GroupsIcon />
            ) : (
                <InboxIcon />
            )}
            {title}
        </Typography>
    );
};

export default FriendsTitle;
