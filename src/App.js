import { useState, useEffect } from "react";
import ScrollNav from "components/ScrollNav/ScrollNav";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import "App.scss";

function App() {
  const [isReady, setIsReady] = useState(false);

  // check FontFaceSet API to verify custom fonts are fully loaded before elements (prevents FOUT flicker)
  useEffect(() => {
    document.fonts.load("1.5rem Karla");
    document.fonts.load("4.75rem Markazi Text");
    document.fonts.ready.then(() => setIsReady(true));
  }, []);

  return (
    isReady && (
      <>
        <ScrollNav />
        <Header />
        <Main />
        <Footer />
      </>
    )
  );
}

export default App;
