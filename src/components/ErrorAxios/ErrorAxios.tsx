import React from "react";

import { Alert } from "@mui/material";
import { IAxiosErrorProps } from "./interfaces";

const ErrorAxios: React.FC<IAxiosErrorProps> = ({ error }) => {
  return (
    <Alert
      severity="error"
      className="ErrorAxios"
      data-testid="error-message-alert"
    >
      {error ? (
        error.response ? (
          <div>
            {error.response.status && (
              <p>Status Code: {error.response.status}</p>
            )}
            {error.response.headers && (
              <p>Headers: {JSON.stringify(error.response.headers)}</p>
            )}
          </div>
        ) : error.request ? (
          <p>No response received from the server.</p>
        ) : (
          <p>Error: {error?.message}</p>
        )
      ) : null}
    </Alert>
  );
};

export default ErrorAxios;
