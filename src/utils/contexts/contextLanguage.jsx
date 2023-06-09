/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import english from "../lang/english";
import spanish from "../lang/spanish";

export const LanguageContext = React.createContext({
  isSpanish: false,
});

function LanguageContextProviders({ children }) {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState(english);

  useEffect(() => {
    if (lang === "es") {
      setContent(spanish);
    } else if (lang === "en") {
      setContent(english);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, content, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export default LanguageContextProviders;
