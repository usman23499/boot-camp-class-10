

import Nav from "./components/Nav";
import Mainscreen from "./components/Mainscreen";
import Selectionbar from "./components/Selectionbar";
import { useState } from "react";

function App() {

  var selection=useState(0);

  return (
    <div >
     <Nav />
     <Selectionbar passSelection={selection} />
     <Mainscreen SetSelection={selection[0]}  />
    </div>
  );
}

export default App;
