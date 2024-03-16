import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <AppBar className="Footer" position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2024 Borderless. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
