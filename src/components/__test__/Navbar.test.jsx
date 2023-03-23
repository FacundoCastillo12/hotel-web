import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider/next-13";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Navbarmenu from "../Navbar";

describe("Navbar", () => {
  it("render navbar with language context", () => {
    render(
      <MemoryRouterProvider url="/">
        <LanguageContextProvider>
          <LanguageContext.Consumer>
            {() => <Navbarmenu />}
          </LanguageContext.Consumer>
        </LanguageContextProvider>
      </MemoryRouterProvider>
    );
    expect(screen.getByText("Miracle Hotel")).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
  });
  it("should render the navbar with menu button", () => {
    render(
      <MemoryRouterProvider url="/">
        <LanguageContextProvider>
          <LanguageContext.Consumer>
            {() => <Navbarmenu />}
          </LanguageContext.Consumer>
        </LanguageContextProvider>
      </MemoryRouterProvider>
    );
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    const menuButton = screen.getByTitle("Menu button");
    expect(menuButton).toBeInTheDocument();
  });
  it("should open and close the menu on click", () => {
    render(
      <MemoryRouterProvider url="/">
        <LanguageContextProvider>
          <LanguageContext.Consumer>
            {() => <Navbarmenu />}
          </LanguageContext.Consumer>
        </LanguageContextProvider>
      </MemoryRouterProvider>
    );
    const menuButton = screen.getByTitle("Menu button");

    fireEvent.click(menuButton);
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
  it("should change language to spanish and latter to english", () => {
    render(
      <MemoryRouterProvider url="/">
        <LanguageContextProvider>
          <LanguageContext.Consumer>
            {() => <Navbarmenu />}
          </LanguageContext.Consumer>
        </LanguageContextProvider>
      </MemoryRouterProvider>
    );

    const langButton = screen.getByText("Language");
    expect(langButton).toBeInTheDocument();
    fireEvent.click(langButton);

    const spanishButton = screen.getByText("Spanish");
    expect(spanishButton).toBeInTheDocument();
    fireEvent.click(spanishButton);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Habitaciones")).toBeInTheDocument();
    expect(screen.getByText("Servicios")).toBeInTheDocument();
    expect(screen.getByText("Idioma")).toBeInTheDocument();

    const englishButton = screen.getByText("Ingles");
    expect(englishButton).toBeInTheDocument();
    fireEvent.click(englishButton);
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
  });

  it("should work in other router", () => {
    render(
      <MemoryRouterProvider url="/roomslist">
        <LanguageContextProvider>
          <LanguageContext.Consumer>
            {() => <Navbarmenu />}
          </LanguageContext.Consumer>
        </LanguageContextProvider>
      </MemoryRouterProvider>
    );
    expect(screen.getByText("Miracle Hotel")).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
  });
});
