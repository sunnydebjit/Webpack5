// Styles && Components Imports
import "../styles/styles.scss";
import Git from "./components/__git";
import Injector from "./Injector/__injector.js";

// Webpack Serve
console.clear();
console.log("Webpack ./src/index.js file succesfully compiled");

// HMR;
if (module.hot) {
  module.hot.accept();
  console.log("Hot Module Reloading has been Initialised");
}

// Live Inject Components
Injector(".container", Git());
