import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@mui/material";

import "./NavigationBar.scss";

const NavigationBar: React.FC = () => {
  return (
    <AppBar className="NavigationBar" position="static" data-testid="nav-bar">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Candidates
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
