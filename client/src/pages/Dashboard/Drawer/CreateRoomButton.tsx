import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { createNewRoom } from "../../../socket/roomHandler";

const CreateRoomButton = ({ isUserInRoom }: { isUserInRoom: boolean }) => {
    const createNewRoomHandler = () => {
        createNewRoom();
    };

    return (
        <Button
            disabled={isUserInRoom}
            onClick={createNewRoomHandler}
            style={{
                color: "white",
                fontSize: "25px",
                marginTop: "2px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                // marginLeft: "px",
            }}
        >+
        </Button>
    );
};

export default CreateRoomButton;
