import { BrowserRouter, Route, Routes } from "react-router-dom";
import DirectCandidatesPage from "./pages/DirectCandidatesPage";
import CandidatePage from "./pages/CandidatePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<DirectCandidatesPage />} />
          <Route path="/user/:id" element={<CandidatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
