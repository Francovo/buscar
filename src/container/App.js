import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {Home } from "../components/Home";
import { Navbar } from "../components/NavBar";
import { url } from "../helpers/url";

const App = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes(data.results);
  };
  console.log(personajes);



  
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home personajes={personajes} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
