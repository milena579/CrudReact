import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./home/page";
import Login from "./login/page";

const Routess = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route component = { Home }  path="/" exact />
                <Route component = { Login }  path="/login" />
            </Routes>
       </BrowserRouter>
   )
}

export default Routess;