import React, { useState } from "react";
import Button from "@mui/material/Button";
import CreateGroupChatDialog from "./CreateGroupChatDialog";

const CreateGroupChatButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenGroupChatDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseGroupChatDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <Button
                onClick={handleOpenGroupChatDialog}
                style={{
                    color: "white",
                    fontSize: "25px",
                    marginTop: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginLeft: "27px" 
                }} > + </Button>
            <CreateGroupChatDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseGroupChatDialog}
            />
        </>
    );
};

export default CreateGroupChatButton;
