import React, { useState } from "react";
import { ICandidateListProps } from "./interfaces";
import CandidateCard from "../../components/CandidateCard";
import { List, ListItem, Pagination } from "@mui/material";

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
    <div className="CandidateList">
      <List>
        {filteredCandidates
          .map((candidateInfo) => (
            <ListItem key={`candidate-${candidateInfo.login.username}`}>
              <CandidateCard candidate={candidateInfo} />
            </ListItem>
          ))
          .slice(startIndex, endIndex)}
      </List>
      {filteredCandidates.length > 8 ? (
        <Pagination
          count={Math.ceil(filteredCandidates.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      ) : null}
    </div>
  );
};

export default CandidateList;
