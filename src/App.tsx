import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContext from "./GlobalContext";

import DirectCandidatesPage from "./pages/DirectCandidatesPage";
import CandidatePage from "./pages/CandidatePage";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ThemeWrapper from "./ThemeWrapper";

import "./App.scss";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const seed = useContext(GlobalContext);

  return (
    <GlobalContext.Provider value={seed}>
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
    </GlobalContext.Provider>
  );
};

export default App;
