import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { CircularProgress, Alert } from "@mui/material";
import { ICandidate } from "./interfaces";

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
        <Alert severity="error">
          {candidatesLoadingError.response ? (
            <div>
              <p>Status Code: {candidatesLoadingError.response.status}</p>
              <p>
                Data: {JSON.stringify(candidatesLoadingError.response.data)}
              </p>
              <p>
                Headers:{" "}
                {JSON.stringify(candidatesLoadingError.response.headers)}
              </p>
            </div>
          ) : candidatesLoadingError.request ? (
            <p>No response received from the server.</p>
          ) : (
            <p>Error: {candidatesLoadingError.message}</p>
          )}
        </Alert>
      ) : (
        <ul>
          {candidateList.map((candidateInfo, index) => (
            <li key={`candidate-${index}`}>{candidateInfo.name.first}</li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <CircularProgress />
  );
};

export default DirectCandidatesPage;
