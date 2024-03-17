import React from "react";
import { useLocation } from "react-router-dom";

import CandidateCardExpended from "../../components/CandidateCardExpended";

const CandidatePage: React.FC = () => {
  const candidateData = useLocation().state?.candidateData;

  return candidateData ? (
    <CandidateCardExpended candidate={candidateData} />
  ) : null;
};

export default CandidatePage;
