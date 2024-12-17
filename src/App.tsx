/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from  'styled-components'; //A biblioteca permite criar estilos no JavaScript e oferece suporte ao conceito de temas.
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
           <Sidebar trocaTemaProp={trocaTema} /> {/*recebe uma prop chamada trocaTemaProp, que é a função trocaTema. */}
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
