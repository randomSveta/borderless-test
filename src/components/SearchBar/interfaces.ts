import React from "react";
import { ICandidate } from "../../pages/CandidatePage/interfaces";
export interface ISearchBarProps {
  setFilteredCandidates: React.Dispatch<React.SetStateAction<ICandidate[]>>;
  candidates: ICandidate[] | [];
}
