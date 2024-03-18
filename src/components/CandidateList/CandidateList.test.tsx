import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import CandidateList from "./CandidateList";

const mockAxios = new MockAdapter(axios);

describe("DirectCandidatesPage", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test("renders DirectCandidatesPage", async () => {
    render(<CandidateList />);

    const page = await screen.findByTestId("candidate-list");
    expect(page).toBeInTheDocument();
  });

  test("renders loading spinner while data is being fetched", async () => {
    mockAxios.onGet("/").reply(200, { results: null });

    render(<CandidateList />);

    const loadingSpinner = await screen.findByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });
});
