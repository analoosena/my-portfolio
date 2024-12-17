import styled from "styled-components";
import { Para } from "../../components/Paragrafo/styles";

export const Descricao = styled(Para) `
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button `
  border-radius: 12px;
  padding: 8px;
  color: blueviolet;
  font-size: 10px;
  font-weight: bold;
  background-color: chocolate;
  border: none;
  cursor:pointer ;
  text-align: center;
`

export const SideBarContainer = styled.div `
  position: sticky;
  top: 30px;
  left: 0;
`