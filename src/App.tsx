import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DirectCandidatesPage from "./pages/DirectCandidatesPage";
import CandidatePage from "./pages/CandidatePage";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<DirectCandidatesPage />} />
          <Route path="/candidate/:id" element={<CandidatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
