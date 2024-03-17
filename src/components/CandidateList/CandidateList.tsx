import React, { useState } from "react";

import { ICandidateListProps } from "./interfaces";

import CandidateCard from "../../components/CandidateCard";
import { List, ListItem, Pagination } from "@mui/material";

import "./CandidateList.scss";

const CandidateList: React.FC<ICandidateListProps> = ({
  filteredCandidates,
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="CandidateList">
      <List className="candidate-list">
        {filteredCandidates
          .map((candidateInfo) => (
            <ListItem
              className="candidate-list__item"
              key={`candidate-${candidateInfo.login.username}`}
            >
              <CandidateCard candidate={candidateInfo} />
            </ListItem>
          ))
          .slice(startIndex, endIndex)}
      </List>
      {filteredCandidates.length > 6 ? (
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
