import React from "react";
import { useParams } from "react-router-dom";

interface Params {
  [key: string]: string | undefined;
}

const CandidatePage: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <div>
      <h1>Candidate profile id: {id}!</h1>
    </div>
  );
};

export default CandidatePage;
