import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DirectCandidatesPage from "./pages/DirectCandidatesPage";
import CandidatePage from "./pages/CandidatePage";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ThemeWrapper from "./ThemeWrapper";

import "./App.scss";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <ThemeWrapper>
      <BrowserRouter>
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<DirectCandidatesPage />} />
            <Route path="/candidate/:username" element={<CandidatePage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </ThemeWrapper>
  );
};

export default App;
