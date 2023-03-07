import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CarritoView from "./pages/CarritoView";


import Header from "./components/Header";



function App() {

  const [clicked, setClicked] = useState(false);

  return (
    <BrowserRouter>
      <Header clicked={clicked} setClicked={setClicked}/>

      <Routes>
        <Route path="/" element={<Home clicked={clicked}/>} />

        <Route path="/carrito" element={<CarritoView />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
