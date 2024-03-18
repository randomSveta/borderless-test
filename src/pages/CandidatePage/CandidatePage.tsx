import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useGlobalContext } from "../../GlobalContext";

import { ICandidate } from "./interfaces";

import CandidateCardExpended from "../../components/CandidateCardExpended";
import ErrorAxios from "../../components/ErrorAxios";
import { CircularProgress } from "@mui/material";

const CandidatePage: React.FC = () => {
  const [candidateExpandedData, setCandidateExpandedData] =
    useState<ICandidate | null>(null);
  const [isCandidateDataLoaded, setIsCandidateDataLoaded] =
    useState<boolean>(false);
  const [candidateDataLoadingError, setCandidateDataLoadingError] =
    useState<AxiosError | null>(null);
  const { username } = useParams();
  const apiUrl: string | null = useGlobalContext();

  useEffect(() => {
    if (apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          const currentCandidate = response.data.results.filter(
            (candidate: { login: { username: string } }) =>
              candidate.login.username === username,
          )[0];
          setCandidateExpandedData(currentCandidate);
        })
        .catch((error: AxiosError) => {
          console.error("Error fetching data:", error);
          setCandidateDataLoadingError(error);
        })
        .finally(() => {
          setIsCandidateDataLoaded(true);
        });
    }
  }, []);

  const candidateCard = candidateExpandedData ? (
    <CandidateCardExpended candidate={candidateExpandedData} />
  ) : null;

  if (candidateDataLoadingError) {
    return <ErrorAxios error={candidateDataLoadingError} />;
  }

  if (!isCandidateDataLoaded) {
    return <CircularProgress data-testid="loading-spinner" />;
  }

  return <div className="CandidatePage">{candidateCard}</div>;
};

export default CandidatePage;
