import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Main from "../Main";

describe("Main", () => {
  it("render main with language context", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Main />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const image = screen.getByAltText("background");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Welcome to Miracle Hotel"
    );
    expect(image).toBeInTheDocument();
  });
});
