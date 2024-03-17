import React, { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";

import GlobalContext from "../../GlobalContext";

import { ICandidate } from "./interfaces";

import { CircularProgress, Paper, Typography } from "@mui/material";
import ErrorAxios from "../../components/ErrorAxios";
import SearchBar from "../../components/SearchBar";
import CandidateList from "../../components/CandidateList";

import "./DirectCandidatesPage.scss";

const DirectCandidatesPage: React.FC = () => {
  const [candidateList, setCandidateList] = useState<ICandidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<
    ICandidate[] | []
  >([]);
  const [isCandidateListLoaded, setIsCandidateListLoaded] =
    useState<boolean>(false);
  const [candidatesLoadingError, setCandidatesLoadingError] =
    useState<AxiosError | null>(null);

  const apiUrl = useContext(GlobalContext);

  useEffect(() => {
    if (!candidateList.length) {
      axios
        .get(apiUrl)
        .then((response) => {
          setCandidateList(response.data.results);
          setIsCandidateListLoaded(true);
        })
        .catch((error: AxiosError) => {
          console.error("Error fetching data:", error);
          setCandidatesLoadingError(error);
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
      <Paper elevation={1} className="direct-candidates__info">
        <h1>Direct Candidates</h1>
        <Typography color="text.secondary">
          These candidates have applied to you directly
        </Typography>
      </Paper>
      <div className="direct-candidates__filters">
        <SearchBar
          setFilteredCandidates={setFilteredCandidates}
          candidates={candidateList}
        />
      </div>

      {isCandidateListLoaded ? candidateProfileList : <CircularProgress />}
    </div>
  );
};

export default DirectCandidatesPage;
