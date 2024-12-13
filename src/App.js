import React, { useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import configuration from "./configuration";
import Home from "./modules/Home";
import { mobileRemoveWhiteStrip } from "./utils/utils";

const App = (props) => {
   const { theme } = configuration;

   useEffect(() => {
      mobileRemoveWhiteStrip();
    }, []);

   return (
      <>
         <ThemeProvider theme={theme}>
            <Routes>
               <Route exact path="/" element={<Home />} />
            </Routes>
         </ThemeProvider>
      </>
   );
};

export default App;
