import "@/styles/globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";

function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <LanguageContext.Consumer>
        {() => (
          <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </LanguageContext.Consumer>
    </LanguageContextProvider>
  );
}

export default App;
