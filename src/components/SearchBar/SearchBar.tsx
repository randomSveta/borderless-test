import React, { useState } from "react";
import { ISearchBarProps } from "./interfaces";
import { Autocomplete, TextField } from "@mui/material";

const SearchBar: React.FC<ISearchBarProps> = ({
  candidates = [],
  setFilteredCandidates,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    const filtered = candidates.filter((candidate) => {
      const { name } = candidate;
      const fullName = `${name.first} ${name.last}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredCandidates(filtered);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <Autocomplete
      className="SearchBar"
      freeSolo
      options={candidates.map(
        (candidate) => `${candidate.name.first} ${candidate.name.last}`,
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="on"
        />
      )}
    />
  );
};

export default SearchBar;
