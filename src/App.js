
import React from 'react';
import GlobalStyle from './style/global';
import Header from './components/Header';
import Board from './components/Board';



function App(){
  return(
    <>
    
      <Header />
      <Board/>
      <GlobalStyle />
      
    </>
  );
}

export default App;
