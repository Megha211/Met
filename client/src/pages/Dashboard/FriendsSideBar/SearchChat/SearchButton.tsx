// searchButton.tsx
import React, { useState } from "react";
import { Typography, InputBase } from "@mui/material";

interface Props {
    onSearchChange: (value: string) => void; // Callback function to handle search value change
}

function SearchButton({ onSearchChange }: Props) {
    const [searchValue, setSearchValue] = useState(""); // State to hold the search value

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        
        setSearchValue(value);
        onSearchChange(value); 
    }

    return (
        <div>
            <div style={{ marginTop: "10px" }}>
                <InputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                    sx={{ backgroundColor: "white", borderRadius: "4px", padding: "8px" }}
                    onChange={handleInputChange}
                />
            </div>
            {/* <Typography>{searchValue}</Typography> Display the search value */}
        </div>
    );
}

export default SearchButton;
