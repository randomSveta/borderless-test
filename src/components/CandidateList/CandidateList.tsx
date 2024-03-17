import React, { useState } from "react";

import { ICandidateListProps } from "./interfaces";

import CandidateCard from "../../components/CandidateCard";
import { Pagination, Grid } from "@mui/material";

import "./CandidateList.scss";

const CandidateList: React.FC<ICandidateListProps> = ({
  filteredCandidates,
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="CandidateList">
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 1, sm: 8, md: 16 }}
      >
        {filteredCandidates
          .map((candidateInfo, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CandidateCard candidate={candidateInfo} />
            </Grid>
          ))
          .slice(startIndex, endIndex)}
      </Grid>
      {filteredCandidates.length > 8 ? (
        <Pagination
          className="Pagination"
          count={Math.ceil(filteredCandidates.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      ) : null}
    </section>
  );
};

export default CandidateList;
