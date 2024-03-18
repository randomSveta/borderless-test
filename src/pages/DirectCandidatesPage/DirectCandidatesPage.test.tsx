import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import DirectCandidatesPage from "./DirectCandidatesPage";
const mockAxios = new MockAdapter(axios);

describe("DirectCandidatesPage", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test("renders DirectCandidatesPage", async () => {
    render(<DirectCandidatesPage />);

    const page = await screen.findByTestId("direct-candidates-page");
    expect(page).toBeInTheDocument();
  });

  test("renders SearchBar component", async () => {
    render(<DirectCandidatesPage />);

    const searchBar = await screen.findByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  test("renders SearchBar component", async () => {
    render(<DirectCandidatesPage />);

    const searchBar = await screen.findByTestId("candidate-list");
    expect(searchBar).toBeInTheDocument();
  });
});
