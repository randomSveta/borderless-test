import React from "react";

import { ICandidate } from "../../pages/DirectCandidatesPage/interfaces";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Divider,
} from "@mui/material";

const CandidateCardExpended: React.FC<{ candidate: ICandidate }> = ({
  candidate,
}) => {
  const { picture, name, location, cell, gender, registered } = candidate;

  return (
    <Card className="CandidateCardExpended">
      <CardMedia
        component="img"
        image={picture.large}
        alt={`Photo ${name.first} ${name.last}`}
        sx={{
          width: "100px",
        }}
      />
      <CardContent>
        <Chip label="Senior carer" />
        <Typography gutterBottom variant="h1" component="div">
          {`${name.title} ${name.first} ${name.last}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.country}
        </Typography>
        <Divider />
        <Typography variant="body3" color="text.secondary">
          {`${gender} / ${new Date(registered.date).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })} / ${cell} / `}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CandidateCardExpended;
