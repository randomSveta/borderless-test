import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { useGlobalContext } from "../../GlobalContext";

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

  const apiUrl: string | null = useGlobalContext();

  useEffect(() => {
    if (apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          setCandidateList(response.data.results);
        })
        .catch((error: AxiosError) => {
          console.error("Error fetching data:");
          setCandidatesLoadingError(error);
        })
        .finally(() => {
          setIsCandidateListLoaded(true);
        });
    }
  }, []);

  useEffect(() => {
    setFilteredCandidates(candidateList);
  }, [candidateList]);

  if (candidatesLoadingError) {
    return <ErrorAxios error={candidatesLoadingError} />;
  }

  if (!isCandidateListLoaded) {
    return <CircularProgress data-testid="loading-spinner" />;
  }

  return (
    <div className="DirectCandidatesPage" data-testid="direct-candidates-page">
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
      <CandidateList filteredCandidates={filteredCandidates} />
    </div>
  );
};

export default DirectCandidatesPage;
