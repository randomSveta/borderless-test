import React from "react";

import { IAxiosErrorProps } from "./interfaces";

import { Alert } from "@mui/material";

const ErrorAxios: React.FC<IAxiosErrorProps> = ({ error }) => {
  return (
    <Alert severity="error">
      {error.response ? (
        <div>
          <p>Status Code: {error.response.status}</p>
          <p>Data: {JSON.stringify(error.response.data)}</p>
          <p>Headers: {JSON.stringify(error.response.headers)}</p>
        </div>
      ) : error.request ? (
        <p>No response received from the server.</p>
      ) : (
        <p>Error: {error.message}</p>
      )}
    </Alert>
  );
};

export default ErrorAxios;
