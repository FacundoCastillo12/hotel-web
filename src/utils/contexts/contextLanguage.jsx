import React, { useState, useMemo } from "react";

export const LanguageContext = React.createContext({
  isSpanish: false,
  setSpanishLanguage: () => {},
  setEnglishLanguage: () => {},
});

function LanguageContextProvider({ children }) {
  const [isSpanish, setIsSpanish] = useState(false);

  const contextValue = useMemo(() => {
    const setSpanishLanguage = () => {
      setIsSpanish(true);
    };
    const setEnglishLanguage = () => {
      setIsSpanish(false);
    };

    return { isSpanish, setSpanishLanguage, setEnglishLanguage };
  }, [isSpanish]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;
