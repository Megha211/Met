import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddFriendDialog from "./AddFriendDialog";

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
      <>
          <Button
              sx={{
                textTransform: "uppercase",
                color: "white",
                fontSize: "25px",
                marginTop: "2px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "70px" 
              }}
              onClick={handleOpenAddFriendDialog}
          >
            +
          </Button>
          <AddFriendDialog
              isDialogOpen={isDialogOpen}
              closeDialogHandler={handleCloseAddFriendDialog}
          />
      </>
  );
};

export default AddFriendButton;
