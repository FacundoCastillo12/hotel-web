import { render, screen } from "@testing-library/react";
import LanguageContextProvider, { LanguageContext } from "@/utils/contexts/contextLanguage";
import "@testing-library/jest-dom";
import ServicesList from "../../../src/pages/serviceslist";

jest.mock("../../../src/hooks/useSimpleFetchHook", () => ({
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
          description: {
            es: "Servicio 1",
            en: "Services 2",
          },
          opening_hours: "08:00",
          closing_hours: "00:00",
        },
        {
          id: 2,
          name: {
            es: "Gimnasio",
            en: "Gym",
          },
          description: {
            es: "Servicio 2",
            en: "Services 2",
          },
          images: [
            "assets/images/gym/daniellecerullo.webp",
            "assets/images/gym/humphreymuleba.webp",
            "assets/images/gym/markbertulfo.webp",
          ],
          opening_hours: "08:00",
          closing_hours: "00:00",
        },
      ],
    },
    error: null,
    loading: true,
  }),
}));

describe("Servicelist", () => {
  it("should render services and rooms data", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <ServicesList />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByText("Our services")).toBeInTheDocument();
    expect(screen.getByText("Bar")).toBeInTheDocument();
    expect(screen.getByText("Gym")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
