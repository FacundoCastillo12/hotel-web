import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";

describe("About", () => {
  it("render about with language context", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <About />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "About us"
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "We are an institution"
    );
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByAltText("Image hotel")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
