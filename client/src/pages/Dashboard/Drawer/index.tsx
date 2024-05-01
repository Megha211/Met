import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import VideoChat from "../../../components/VideoChat";
import IncomingCall from "../../../components/IncomingCall";
import Messenger from "../Messenger/Messenger";
import AddFriendButton from "../FriendsSideBar/AddFriendButton";
import FriendsList from "../FriendsSideBar/FriendsList/FriendsList";
import FriendsTitle from "../FriendsSideBar/FriendsTitle";
import PendingInvitationsList from "../FriendsSideBar/PendingInvitationsList/PendingInvitationsList";
import DropDownMenu from "./DropdownMenu";
import CreateRoomButton from "./CreateRoomButton";
import CreateGroupChatButton from "./CreateGroupChatButton";
import GroupChatList from "../FriendsSideBar/GroupChatList";
import ActiveRooms from "../ActiveRooms";

import SearchButton from "../FriendsSideBar/SearchChat/SearchButton";

import { useAppSelector } from "../../../store";

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    localStream: MediaStream | null;
    isUserInRoom: boolean;
}

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const {
        room: { isUserInRoom }
    } = useAppSelector((state) => state);

    const [searchName, setSearchName] = useState(""); // State to hold the search value

    const handleSearchChange = (value: string) => {
        setSearchName(value); // Update the search value state
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div
            style={{
                backgroundColor: "#3b3486",
                height: "100%",
                overflowY: "auto",
                padding: "5px 15px",
                borderRadius: "0 20px 20px 0",
                // borderRight: "1px solid #3b34",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // margin: "10px 0",
                }}
            >
                <h2 style={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                }}>Dashboard</h2>
                <DropDownMenu />
            </div>
            <Divider />
            <div className="group">
                <div className="group-head" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width:"230px"
                }}>    
                    <FriendsTitle title="Active Rooms" />
                    <CreateRoomButton isUserInRoom={props.isUserInRoom} />
                </div>
                <ActiveRooms />
            </div>
            <Divider />
            <div className="search">
                <div className="group-head" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width:"230px"
                }}>
                </div>
            </div>
            <FriendsTitle title="Search Chat" />
            <SearchButton onSearchChange={handleSearchChange} />
            <Divider />
            <div className="friend" style={{
                display: "flex",
                justifyContent: "space-between",
                width:"230px"
            }}>    
                <FriendsTitle title="Friends" />
                <AddFriendButton />
            </div>
            <FriendsList searchName={searchName}/>
            <Divider />
            <Divider />
            <FriendsTitle title="Invitations" />
            <PendingInvitationsList />
            <Divider />
            <div className="group-chat">
                <div className="group-chat-head" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width:"230px"
                }}>
                    <FriendsTitle title="Group Chats" />
                    <CreateGroupChatButton />
                </div>
                <GroupChatList searchName={searchName}/>
            </div>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <IconButton
                style={{
                    position: "fixed",
                    top: 10,
                    left: 17,
                    zIndex: 1000,
                    color: "white",
                }}
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
            >
                <MenuIcon />
            </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            backgroundColor: "#4a4aae",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    background: "red",
                    // width: { sm: `calc(100vw - ${drawerWidth}px)` },
                    width: {
                        xs: `calc(100vw)`,
                        sm: `calc(100vw - ${drawerWidth}px)`,
                    },

                }}
            >
                <Messenger />
                {props.localStream && <VideoChat />}
                <IncomingCall />
            </Box>
        </Box>
    );
}
