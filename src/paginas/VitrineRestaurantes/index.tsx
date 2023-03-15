import React from 'react';
import Banner from '../../componentes/Banner';
import ListaRestaurantes from '../../componentes/ListaRestaurantes';
import NavBar from '../../componentes/NavBar';
import Rodape from '../../componentes/Rodape';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListaRestaurantes />
      <Rodape />
    </>
  );
}

export default App;
