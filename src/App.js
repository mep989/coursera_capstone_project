import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "pages/Layout/Layout";
import Home from "pages/Home/Home";
import Maintenance from "pages/Maintenance/Maintenance";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="under-maintenance" element={<Maintenance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
