import React from "react";
import { Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";

const FriendsTitle = ({ title }: { title: string }) => {
    return (
        <div>
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
                ) : title === "Group Chats" || title === "Active Rooms" ? (
                    <GroupsIcon />
                ) : title === "Search Chat" ? (
                    <SearchIcon />
                ) : (
                    <InboxIcon />
                )}
                {title}
            </Typography>
        </div>
    );
};


export default FriendsTitle;
