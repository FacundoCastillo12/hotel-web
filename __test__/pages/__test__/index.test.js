import { render, screen } from "@testing-library/react";
import Home from "../../../src/pages";
import LanguageContextProvider, { LanguageContext } from "@/utils/contexts/contextLanguage";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

jest.mock("../../../src/hooks/useSimpleFetchHook", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    data: {
      rooms: [
        {
          id: 1,
          title: {
            es: "Vista al mar",
            en: "Sea view",
          },
          room_image: "Image1",
          description: {
            es: "Habitacion prueba en español",
            en: "Room test in english",
          },
          price_for_day: 250,
        },
        {
          id: 2,
          title: {
            es: "Habitacion Cielo",
            en: "Heaven Room",
          },
          room_image: "Image2",
          description: {
            es: "Habitacion celestial",
            en: "Celestial Room",
          },
          price_for_day: 350,
        },
      ],
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

describe("Home", () => {
  it("should render all components", async () => {
    act(() => {
      render(
        <LanguageContextProvider>
          <LanguageContext.Consumer>{() => <Home />}</LanguageContext.Consumer>
        </LanguageContextProvider>
      );
    });

    expect(screen.getByRole("heading", { name: /miracle hotel/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /rooms/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });
});
