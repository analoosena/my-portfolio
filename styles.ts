import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    font-family: "Montserrat", sans-serif;
    list-style: none;
    }
    body{
        padding-top: 80px;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        display: block;
        padding-bottom: 80px;
        background-color: ${(props) => props.theme.cordeFundo};
        
        @media (max-width:768px){
          padding-top: 16px;
        }
    }
`;

export default EstiloGlobal;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  margin: 0 auto;
  max-width: 90%;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
// #8b62a7 - Quaternaria
// #ce8f8b - Terciaria
// #fe6e95
// #98a0ac - Secundária
// #382b23 - Principal