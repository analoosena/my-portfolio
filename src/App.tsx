/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from  'styled-components';
import { useState } from 'react';

import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from '../styles';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import temaLight from './Themes/Light';
import temaDark from './Themes/Dark';


function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState (false);

  function trocaTema(){
    setEstaUsandoDark(!estaUsandoDark)
  }
  return (
    <>
      <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTemaProp={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
