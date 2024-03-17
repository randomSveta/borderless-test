import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <AppBar className="Footer" position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2024 Sveta K. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
