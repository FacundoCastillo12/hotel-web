import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Rooms from "../Rooms";

let roomData = [
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
];
let error = null;
let loading = false;

jest.mock("../../hooks/useHandleLoadRooms", () => ({
  __esModule: true,
  default: () => ({
    roomData,
    error,
    loading,
  }),
}));

describe("Rooms", () => {
  it("render rooms with language context", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Rooms />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Our rooms"
    );
    expect(screen.getByText("Sea view")).toBeInTheDocument();
    expect(screen.getByText("Room test in english")).toBeInTheDocument();
    expect(screen.getByText("$250/Night")).toBeInTheDocument();

    expect(screen.getByText("Heaven Room")).toBeInTheDocument();
    expect(screen.getByText("Celestial Room")).toBeInTheDocument();
    expect(screen.getByText("$350/Night")).toBeInTheDocument();
  });
  it("render loading", () => {
    roomData = null;
    loading = true;
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Rooms />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
  it("render error", () => {
    roomData = null;
    loading = false;
    error = true;
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Rooms />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
