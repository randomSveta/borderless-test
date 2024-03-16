import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { ICandidate } from "./interfaces";

import { CircularProgress, Paper } from "@mui/material";
import ErrorAxios from "../../components/ErrorAxios";

const DirectCandidatesPage: React.FC = () => {
  const [candidateList, setCandidateList] = useState<ICandidate[]>([]);
  const [isCandidateListLoaded, setIsCandidateListLoaded] =
    useState<boolean>(false);
  const [candidatesLoadingError, setCandidateLoadingError] =
    useState<AxiosError | null>(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        setCandidateList(response.data.results);
        setIsCandidateListLoaded(true);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching data:", error);
        setCandidateLoadingError(error);
        setIsCandidateListLoaded(true);
      });
  }, []);

  return isCandidateListLoaded ? (
    <div>
      {candidatesLoadingError ? (
        <ErrorAxios error={candidatesLoadingError} />
      ) : (
        <div>
          <Paper elevation={3}>
            <h1>Direct Candidates</h1>
            <p>These candidates have applied to you directly</p>
          </Paper>
          <ul>
            {candidateList.map((candidateInfo, index) => (
              <li key={`candidate-${index}`}>{candidateInfo.name.first}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : (
    <CircularProgress />
  );
};

export default DirectCandidatesPage;
