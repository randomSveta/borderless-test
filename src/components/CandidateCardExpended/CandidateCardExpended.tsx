import React from "react";

import { ICandidate } from "../../pages/DirectCandidatesPage/interfaces";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CandidateCardExpended: React.FC<{ candidate: ICandidate }> = ({
  candidate,
}) => {
  const { picture, name, location } = candidate;

  return (
    <Card className="CandidateCardExpended" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image={picture.large}
        alt={`Photo ${name.first} ${name.last}`}
        sx={{
          width: "100px",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h1" component="div">
          {`${name.title} ${name.first} ${name.last}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.country}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CandidateCardExpended;
