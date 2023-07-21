import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import Footer from "./Components/Footer.jsx";
import Info from "./Components/Info.jsx";
import Ingredients from "./Components/Ingredients.jsx";
import Instructions from "./Components/Instructions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Info />
    <Ingredients />
    <Instructions />
    <div className="credits">
      <Footer />
    </div>  
  </>
);
