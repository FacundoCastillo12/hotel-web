import { render, screen } from "@testing-library/react";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import "@testing-library/jest-dom";
import RoomsList from "../roomslist";

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
          images: [
            "assents/images/rooms/roomone/francescasaraco.jpg",
            "assents/images/rooms/roomone/humphreymuleba.jpg",
            "assents/images/rooms/roomone/roomone.jpg",
          ],
          description: {
            es: "Habitacion prueba en español",
            en: "Room test in english",
          },
          price_for_day: 250,
          bed: "king size",
          jacuzzi: true,
          air_conditioning: true,
          private_bathroom: true,
          television: true,
          living_room: true,
          mini_bar: true,
        },
        {
          id: 2,
          title: {
            es: "Habitacion Cielo",
            en: "Heaven Room",
          },
          room_image: "Image2",
          images: [
            "assents/images/rooms/roomtwo/sashakaunasone.jpg",
            "assents/images/rooms/roomtwo/sashakaunastwo.jpg",
            "assents/images/rooms/roomtwo/sashakaunasthree.jpg",
          ],
          description: {
            es: "Habitacion celestial",
            en: "Celestial Room",
          },
          price_for_day: 350,
          bed: "king size",
          jacuzzi: false,
          air_conditioning: false,
          private_bathroom: false,
          television: false,
          living_room: false,
          mini_bar: false,
        },
      ],
    },
    error: null,
    loading: true,
  }),
}));

describe("Roomslist", () => {
  it("should render room and rooms data", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>
          {() => <RoomsList />}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Our rooms"
    );
    expect(screen.getByText("Sea view")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
