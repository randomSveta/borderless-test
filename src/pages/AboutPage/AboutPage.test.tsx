import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

test("renders AboutPage", () => {
  render(<AboutPage />);
  const aboutText = screen.getByTestId("about-text");
  expect(aboutText).toBeInTheDocument();
});
