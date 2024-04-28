import React from "react";
import { styled } from "@mui/system";
import { useAppSelector } from "../../../../store";
import GroupChatListItem from "./GroupChatListItem";


const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%",
    margin: "20px 0",
});

interface FriendsListProps {
    searchName: string; // Define the type of searchName prop
}

const GroupChatList = (props: FriendsListProps) => {
    const { groupChatList } = useAppSelector((state) => state.friends);

    const searchGroupChats = groupChatList?.filter(friend => {
        const username = friend.groupName.toLowerCase();
        const searchName = props.searchName.toLowerCase();
        
        return username.includes(searchName);
    });

    return (
        <MainContainer>
            {searchGroupChats.map((chat) => (
                <GroupChatListItem
                    chat={chat}
                    key={chat.groupId}
                />
            ))}
        </MainContainer>
    );
};

export default GroupChatList;
