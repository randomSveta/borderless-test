import { Link } from "react-router-dom";

import { ICandidate } from "../../pages/DirectCandidatesPage/interfaces";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const CandidateCard: React.FC<{ candidate: ICandidate }> = ({ candidate }) => {
  const { picture, name, location, login } = candidate;
  return (
    <Link to={`/candidate/${login.username}`} className="CandidateCard">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={picture.large}
            alt={`Photo ${name.first} ${name.last}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${name.title} ${name.first} ${name.last}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {location.country}
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CandidateCard;
