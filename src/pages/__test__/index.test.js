import { render, screen } from "@testing-library/react";
import Home from "..";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

jest.mock("../../hooks/useSimpleFetchHook", () => ({
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

describe("Home", () => {
  it("should render all components", async () => {
    act(() => {
      render(
        <LanguageContextProvider>
          <LanguageContext.Consumer>{() => <Home />}</LanguageContext.Consumer>
        </LanguageContextProvider>
      );
    });

    expect(
      screen.getByRole("heading", { name: /miracle hotel/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /rooms/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });
});
