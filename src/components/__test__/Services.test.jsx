import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, { LanguageContext } from "@/utils/contexts/contextLanguage";
import Services from "../Services";

jest.mock("../../hooks/useSimpleFetchHook", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    data: {
      services: [
        {
          id: 1,
          name: {
            es: "Bar",
            en: "Bar",
          },
          images: [
            "assets/images/bar/crew.webp",
            "assets/images/bar/patricktomasso.webp",
            "assets/images/bar/taylordavidsonbar.webp",
          ],
        },
        {
          id: 2,
          name: {
            es: "Gimnasio",
            en: "Gym",
          },
          images: [
            "assets/images/gym/daniellecerullo.webp",
            "assets/images/gym/humphreymuleba.webp",
            "assets/images/gym/markbertulfo.webp",
          ],
        },
      ],
    },
    error: null,
    loading: true,
  }),
}));

describe("Rooms", () => {
  it("render rooms with language context", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Services />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Our services");
    const moreServices = screen.getByText("Learn more about our services");
    expect(moreServices).toHaveAttribute("href", "/serviceslist");
  });

  it("renders the services data when data fetch is successful", async () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Services />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByText("Bar")).toBeInTheDocument();
    expect(screen.getByText("Gym")).toBeInTheDocument();
  });

  it("renders loading", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Services />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
