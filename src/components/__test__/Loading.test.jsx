import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loading from "../Loading";

describe("Loading", () => {
  it("should render without errros", () => {
    render(<Loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
