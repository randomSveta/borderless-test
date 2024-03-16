import React from "react";
import { AxiosError } from "axios";
import { Alert } from "@mui/material";

interface Props {
  error: AxiosError;
}

const ErrorAxios: React.FC<Props> = ({ error }) => {
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
