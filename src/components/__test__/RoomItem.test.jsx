import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Room from "../RoomItem";

describe("Roomitem", () => {
  const seaViewRoom = {
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
  };
  beforeAll(() => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>
          {() => <Room room={seaViewRoom} />}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    );
  });
  it("render roomitem with language context", () => {
    expect(screen.getByText("Sea view")).toBeInTheDocument();
    expect(screen.getByText("Room test in english")).toBeInTheDocument();
    expect(screen.getByText("$250/Night")).toBeInTheDocument();
    expect(screen.getByText("$1750/Week")).toBeInTheDocument();
  });
});
