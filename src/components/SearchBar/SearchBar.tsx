import React, { useState } from "react";

import { ISearchBarProps } from "./interfaces";

import { TextField } from "@mui/material";

const SearchBar: React.FC<ISearchBarProps> = ({
  candidates = [],
  setFilteredCandidates,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    const filtered = candidates.filter((candidate) =>
      candidate.name.first.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCandidates(filtered);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
