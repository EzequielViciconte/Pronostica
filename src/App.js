import React,{Fragment} from "react";

import './App.css';

//Routing
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

/*** Layout */
import Header from "./componentes/layout/Header";

//** Componentes */
import Home from "./pages/home";
import SearchResult from "./pages/SearchResult";



function App() {
  return (
    <Router>
      <Fragment>
          <Header/>
          <div className="App">
            <section className="App-header">
              <div className="grid contenedor contenido-principal">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Buscar/:lat/:lon" element={<SearchResult/>}/>
                </Routes>
              </div>
            </section>
          </div> 
      </Fragment>
  </Router>
  );
}

export default App;
