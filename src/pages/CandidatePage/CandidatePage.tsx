import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import GlobalContext from "../../GlobalContext";

import { ICandidate } from "../DirectCandidatesPage/interfaces";

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

  const apiUrl = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const currentCandidate = response.data.results.filter(
          (candidate: { login: { username: string } }) =>
            candidate.login.username === username,
        )[0];
        setCandidateExpandedData(currentCandidate);
        setIsCandidateDataLoaded(true);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching data:", error);
        setCandidateDataLoadingError(error);
        setIsCandidateDataLoaded(true);
      });
  }, []);

  const candidateCard = candidateExpandedData ? (
    <CandidateCardExpended candidate={candidateExpandedData} />
  ) : null;

  const candidateProfile = candidateDataLoadingError ? (
    <ErrorAxios error={candidateDataLoadingError} />
  ) : (
    candidateCard
  );

  return (
    <div className="CandidatePage">
      {isCandidateDataLoaded ? candidateProfile : <CircularProgress />}
    </div>
  );
};

export default CandidatePage;
