import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
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
            "assents/images/bar/crew.jpg",
            "assents/images/bar/patricktomasso.jpg",
            "assents/images/bar/taylordavidsonbar.jpg",
          ],
        },
        {
          id: 2,
          name: {
            es: "Gimnasio",
            en: "Gym",
          },
          images: [
            "assents/images/gym/daniellecerullo.jpg",
            "assents/images/gym/humphreymuleba.jpg",
            "assents/images/gym/markbertulfo.jpg",
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
        <LanguageContext.Consumer>
          {() => <Services />}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Our services"
    );
    const moreServices = screen.getByText("Learn more about our services");
    expect(moreServices).toHaveAttribute("href", "/serviceslist");
  });

  it("renders the services data when data fetch is successful", async () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>
          {() => <Services />}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByText("Bar")).toBeInTheDocument();
    expect(screen.getByText("Gym")).toBeInTheDocument();
  });

  it("renders loading", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>
          {() => <Services />}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
