import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the movies header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/movies/i);
  expect(linkElement).toBeInTheDocument();
});
