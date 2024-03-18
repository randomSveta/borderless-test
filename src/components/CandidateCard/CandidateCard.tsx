import { Link } from "react-router-dom";

import { ICandidate } from "../../pages/CandidatePage/interfaces";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Divider,
} from "@mui/material";

import "./CandidateCard.scss";

const CandidateCard: React.FC<{ candidate: ICandidate }> = ({ candidate }) => {
  const { picture, name, location, login, email } = candidate;

  const rows = [
    { name: "Location", data: location.city },
    { name: "Email", data: email },
  ];

  return (
    <Link to={`/candidate/${login.username}`} className="CandidateCard">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={picture.large}
            alt={`Photo ${name.first} ${name.last}`}
          />
          <CardContent className="candidate-info">
            <div className="candidate-info__main">
              <Typography gutterBottom variant="h5" component="div">
                <span>{`${name.first} ${name.last}`}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location.country}
              </Typography>
              <span>BORDERLESS VERIFIED</span> {/* don't have data to map */}
            </div>
            <div className="candidate-info__secondary">
              {rows.map((row, index) => (
                <div className="contacts" key={index}>
                  <Typography
                    className="contacts__row"
                    // @ts-ignore
                    variant="body3"
                    color="text.secondary"
                  >
                    <span>{row.name}&nbsp;</span>
                    <span>{row.data}</span>
                  </Typography>

                  {index < rows.length - 1 ? <Divider /> : null}
                </div>
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CandidateCard;
