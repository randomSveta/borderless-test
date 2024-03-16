import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const CandidateCard: React.FC = ({ candidate }) => {
  const { picture, name, location, login } = candidate;
  console.log(candidate);
  return (
    <Link
      to={`/candidate/${login.username}`}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="80"
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
