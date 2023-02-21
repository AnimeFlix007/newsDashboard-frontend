import React from "react";
import Navbar from "./components/shared/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router />
    </React.Fragment>
  );
}

export default App;
