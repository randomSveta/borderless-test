import CandidateCard from "../../components/CandidateCard";
import { List, ListItem } from "@mui/material";

const CandidateList: React.FC = ({ filteredCandidates }) => {
  return (
    <List>
      {filteredCandidates.map((candidateInfo, index) => (
        <ListItem key={`candidate-${index}`}>
          <CandidateCard candidate={candidateInfo} />
        </ListItem>
      ))}
    </List>
  );
};

export default CandidateList;
