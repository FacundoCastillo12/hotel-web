import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, { LanguageContext } from "@/utils/contexts/contextLanguage";
import Carousel from "../Carousel";

describe("Carousel", () => {
  it("render carousel with language context", () => {
    const images = [
      "assets/images/rooms/roomtwo/sashakaunasone.webp",
      "assets/images/rooms/roomtwo/sashakaunastwo.webp",
      "assets/images/rooms/roomtwo/sashakaunasthree.webp",
    ];
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Carousel images={images} />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const imageTest = screen.getByAltText("Image 0");
    expect(imageTest).toBeInTheDocument();
  });
  it("render carousel and click button next", () => {
    const images = [
      "assets/images/rooms/roomtwo/sashakaunasone.webp",
      "assets/images/rooms/roomtwo/sashakaunastwo.webp",
      "assets/images/rooms/roomtwo/sashakaunasthree.webp",
    ];
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Carousel images={images} />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const imageTest = screen.getByAltText("Image 0");
    expect(imageTest).toBeInTheDocument();
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByAltText("Image 2")).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByAltText("Image 0")).toBeInTheDocument();
  });
  it("render carousel and click button previous", () => {
    const images = [
      "assets/images/rooms/roomtwo/sashakaunasone.webp",
      "assets/images/rooms/roomtwo/sashakaunastwo.webp",
      "assets/images/rooms/roomtwo/sashakaunasthree.webp",
    ];
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Carousel images={images} />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const imageTest = screen.getByAltText("Image 0");
    expect(imageTest).toBeInTheDocument();
    const prevButton = screen.getByRole("button", { name: "Anterior" });
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Image 2")).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Image 0")).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Image 2")).toBeInTheDocument();
  });
});
