import React from "react";
import { ISearchBarProps } from "./interfaces";
import { Autocomplete, TextField } from "@mui/material";

const SearchBar: React.FC<ISearchBarProps> = ({
  candidates = [],
  setFilteredCandidates,
}) => {
  const handleSearch = (value: string) => {
    const filtered = candidates.filter((candidate) => {
      const { name } = candidate;
      const fullName = `${name.title} ${name.first} ${name.last}`;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredCandidates(filtered);
  };

  return (
    <Autocomplete
      className="SearchBar"
      freeSolo
      options={candidates.map(
        (candidate) => `${candidate.name.first} ${candidate.name.last}`,
      )}
      onInputChange={(_, value) => handleSearch(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          autoComplete="on"
        />
      )}
    />
  );
};

export default SearchBar;
