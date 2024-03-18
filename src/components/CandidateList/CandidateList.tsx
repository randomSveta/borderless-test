import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { CircularProgress } from "@mui/material";
import { useGlobalContext } from "../../GlobalContext"; // Import useGlobalContext
import { ICandidate } from "../../pages/CandidatePage/interfaces";
import ErrorAxios from "../../components/ErrorAxios";
import CandidateCard from "../../components/CandidateCard";
import { Pagination, Grid } from "@mui/material";
import "./CandidateList.scss";
import SearchBar from "../SearchBar";

const CandidateList: React.FC = () => {
  const apiUrl: string | null = useGlobalContext(); // Use useGlobalContext to get apiUrl
  const [candidateList, setCandidateList] = useState<ICandidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<ICandidate[]>(
    [],
  );
  const [isCandidateListLoaded, setIsCandidateListLoaded] =
    useState<boolean>(false);
  const [candidatesLoadingError, setCandidatesLoadingError] =
    useState<AxiosError | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (apiUrl) {
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
    }
  }, [apiUrl]);

  useEffect(() => {
    setFilteredCandidates(candidateList);
  }, [candidateList]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (!isCandidateListLoaded) {
    return <CircularProgress data-testid="loading-spinner" />;
  }

  if (candidatesLoadingError) {
    return <ErrorAxios error={candidatesLoadingError} />;
  }

  return (
    <section className="CandidateList" data-testid="candidate-list">
      <div className="direct-candidates__filters">
        <SearchBar
          setFilteredCandidates={setFilteredCandidates}
          candidates={candidateList}
        />
      </div>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 1, sm: 8, md: 16 }}
      >
        {filteredCandidates
          .slice(startIndex, endIndex)
          .map((candidateInfo, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CandidateCard candidate={candidateInfo} />
            </Grid>
          ))}
      </Grid>
      {filteredCandidates.length > itemsPerPage && (
        <Pagination
          className="Pagination"
          count={Math.ceil(filteredCandidates.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      )}
    </section>
  );
};

export default CandidateList;
