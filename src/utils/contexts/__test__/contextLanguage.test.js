import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import { act } from "react-dom/test-utils";

function TestComponent() {
  const { lang, content, setLang } = React.useContext(LanguageContext);

  const handleLanguageSpanish = () => {
    setLang("es");
  };
  const handleLanguageEnglish = () => {
    setLang("en");
  };
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="content">{content.main.welcome}</span>
      <button onClick={handleLanguageEnglish} data-testid="set-english">
        English
      </button>
      <button onClick={handleLanguageSpanish} data-testid="set-spanish">
        Español
      </button>
    </div>
  );
}

test("LanguageContextProviders updates language correctly", async () => {
  render(
    <LanguageContextProvider>
      <TestComponent />
    </LanguageContextProvider>
  );

  const langElement = screen.getByTestId("lang");
  const contentElement = screen.getByTestId("content");
  const englishButton = screen.getByTestId("set-english");
  const spanishButton = screen.getByTestId("set-spanish");

  expect(langElement.textContent).toBe("en");
  expect(contentElement.textContent).toBe("Welcome to Miracle Hotel");
  act(() => {
    spanishButton.click();
  });

  expect(langElement.textContent).toBe("es");
  expect(contentElement.textContent).toBe("Bienvenidos al Hotel Miracle");

  act(() => {
    englishButton.click();
  });

  expect(langElement.textContent).toBe("en");
  expect(contentElement.textContent).toBe("Welcome to Miracle Hotel");
});
