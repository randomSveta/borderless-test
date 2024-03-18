import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";

import DirectCandidatesPage from "./pages/DirectCandidatesPage";
import CandidatePage from "./pages/CandidatePage";
import AboutPage from "./pages/AboutPage/AboutPage";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ThemeWrapper from "./ThemeWrapper";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/borderless-test">
      <GlobalProvider
        apiUrl={"https://randomuser.me/api/?seed=test&results=50"}
      >
        <ThemeWrapper>
          <NavigationBar />
          <main>
            <Routes>
              <Route path="/" element={<DirectCandidatesPage test={false} />} />
              <Route path="/candidate/:username" element={<CandidatePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeWrapper>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
