import React from "react";
import { BrowserRouter } from "react-router-dom";

import { CurrentEmployes } from "./lib/components/CurrentEmployes";
function App() {
     let arrayEmployes = JSON.parse(localStorage.getItem("employesId"));
     let arrayUseStore = JSON.parse(localStorage.getItem("employesId"));
     return (
          <div className="App">
               <BrowserRouter>
                    <CurrentEmployes
                         arrayEmployes={arrayEmployes}
                         arrayUseStore={arrayUseStore}
                    />
               </BrowserRouter>
          </div>
     );
}

export default App;
