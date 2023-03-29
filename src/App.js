import { CurrentEmployes } from "./lib/components/CurrentEmployes";
function App() {
     let arrayEmployes = JSON.parse(localStorage.getItem("employesId"));
     let arrayUseStore = JSON.parse(localStorage.getItem("employesId"));
     return (
          <div className="App">
               <CurrentEmployes
                    arrayEmployes={arrayEmployes}
                    arrayUseStore={arrayUseStore}
               />
          </div>
     );
}

export default App;
