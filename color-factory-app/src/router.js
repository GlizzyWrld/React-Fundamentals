import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import * as Views from "./views";
import DefaultRedirect from "./helpers/defaultRedirect";
import { initialColors } from "./components/Colors";

const ColorRoute = () => {
    const { color } = useParams();
    const validColor = initialColors.find((c) => c.color === color);
  
    if (validColor) {
      return <Views.ColorView />;
    } else {
      return <Navigate to="/colors" />;
    }
  };



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DefaultRedirect/>}/>
                <Route exact path="/colors" element={<Views.ColorsView/>}/>
                <Route exact path="/colors/new" element={<Views.NewColorFormView/>}/>
                <Route exact path="/colors/:color" element={<ColorRoute/>}/>
                <Route exact path="/*" element={<DefaultRedirect/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;