import React from "react";
import { Paper, Typography } from "@mui/material";
import CandidateList from "../../components/CandidateList";
import "./DirectCandidatesPage.scss";

const DirectCandidatesPage: React.FC = () => {
  return (
    <div className="DirectCandidatesPage" data-testid="direct-candidates-page">
      <Paper elevation={1} className="direct-candidates__info">
        <h1>Direct Candidates</h1>
        <Typography color="text.secondary">
          These candidates have applied to you directly
        </Typography>
      </Paper>
      <CandidateList />
    </div>
  );
};

export default DirectCandidatesPage;
