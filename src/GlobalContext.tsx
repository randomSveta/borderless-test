import React from "react";

const GlobalContext = React.createContext<string>(
  "https://randomuser.me/api/?seed=test&results=50",
);

export default GlobalContext;
