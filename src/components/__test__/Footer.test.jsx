import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Footer from "../Footer";

describe("Footer", () => {
  it("render footer with language context and check link", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Footer />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const linkedin = screen.getByTitle("Link to linkedin");
    const github = screen.getByTitle("Link to github");
    const textFooter = screen.getByText("Miracle Hotel");
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/facundocastillo12/"
    );
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/FacundoCastillo12"
    );
    expect(textFooter).toHaveAttribute(
      "href",
      "https://github.com/FacundoCastillo12"
    );
  });
});
