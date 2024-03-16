import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { ICandidate } from "./interfaces";

import { CircularProgress, Paper } from "@mui/material";
import ErrorAxios from "../../components/ErrorAxios";
import SearchBar from "../../components/SearchBar";
import CandidateList from "../../components/CandidateList";

const DirectCandidatesPage: React.FC = () => {
  const [candidateList, setCandidateList] = useState<ICandidate[]>(
    JSON.parse(sessionStorage.getItem("candidates") || "[]") || [],
  );
  const [filteredCandidates, setFilteredCandidates] = useState<
    ICandidate[] | []
  >([]);
  const [isCandidateListLoaded, setIsCandidateListLoaded] =
    useState<boolean>(false);
  const [candidatesLoadingError, setCandidateLoadingError] =
    useState<AxiosError | null>(null);

  useEffect(() => {
    if (!candidateList.length) {
      axios
        .get("https://randomuser.me/api/?results=100")
        .then((response) => {
          setCandidateList(response.data.results);
          sessionStorage.setItem(
            "candidates",
            JSON.stringify(response.data.results),
          );
          setIsCandidateListLoaded(true);
        })
        .catch((error: AxiosError) => {
          console.error("Error fetching data:", error);
          setCandidateLoadingError(error);
          setIsCandidateListLoaded(true);
        });
    } else {
      setIsCandidateListLoaded(true);
    }
  }, []);

  useEffect(() => {
    setFilteredCandidates(candidateList);
  }, [candidateList]);

  const candidateProfileList = candidatesLoadingError ? (
    <ErrorAxios error={candidatesLoadingError} />
  ) : (
    <CandidateList filteredCandidates={filteredCandidates} />
  );

  return (
    <div className="DirectCandidatesPage">
      <Paper elevation={3}>
        <h1>Direct Candidates</h1>
        <p>These candidates have applied to you directly</p>
      </Paper>
      <SearchBar
        setFilteredCandidates={setFilteredCandidates}
        candidates={candidateList}
      />
      {isCandidateListLoaded ? candidateProfileList : <CircularProgress />}
    </div>
  );
};

export default DirectCandidatesPage;
