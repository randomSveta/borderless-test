import React from "react";

import { ISearchBarProps } from "./interfaces";

import { Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.scss";

const SearchBar: React.FC<ISearchBarProps> = ({
  candidates = [],
  setFilteredCandidates,
}) => {
  const handleSearch = (value: string) => {
    const filtered = candidates.filter((candidate) => {
      const { name } = candidate;
      const fullName = `${name.first} ${name.last}`;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredCandidates(filtered);
  };

  return (
    <Autocomplete
      className="SearchBar"
      data-testid="search-bar"
      freeSolo
      options={candidates.map(
        (candidate) => `${candidate.name.first} ${candidate.name.last}`,
      )}
      onInputChange={(_, value) => handleSearch(value)}
      renderInput={(params) => (
        <TextField
          className="search-text"
          {...params}
          label=""
          variant="outlined"
          autoComplete="on"
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <SearchIcon color="disabled" sx={{ mr: 1, my: 0.5 }} />
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
