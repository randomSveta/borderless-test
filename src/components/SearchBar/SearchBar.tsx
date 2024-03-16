import React, { useState } from "react";

import { ISearchBarProps } from "./interfaces";

import { TextField, List, ListItem, ListItemText } from "@mui/material";

const SearchBar: React.FC<ISearchBarProps> = ({
  onSearch,
  candidates = [],
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
        autoComplete="off"
      />
      <List>
        {candidates &&
          candidates.map((candidate, index) => (
            <ListItem key={index}>
              <ListItemText primary={candidate} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default SearchBar;
