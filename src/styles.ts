import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    }
    body{
        padding-top: 80px;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`;

export default EstiloGlobal;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  img {
    max-width: 100%;
  }
`;
