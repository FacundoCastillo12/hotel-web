import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../_app";
import { MemoryRouterProvider } from "next-router-mock/dist/MemoryRouterProvider";

describe("App", () => {
  test("renders Navbar, Component, and Footer", () => {
    const pageProps = {};
    render(
      <MemoryRouterProvider url="/">
        <App
          Component={() => <div data-testid="component" />}
          pageProps={pageProps}
        />
      </MemoryRouterProvider>
    );
    const navbar = screen.getByRole("navigation");
    const component = screen.getByTestId("component");
    const footer = screen.getByRole("contentinfo");
    expect(navbar).toBeInTheDocument();
    expect(component).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    const linkedin = screen.getByTitle("Link to linkedin");
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/facundocastillo12/"
    );
  });
});
