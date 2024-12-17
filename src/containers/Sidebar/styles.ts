import styled from 'styled-components';
import { Para } from '../../components/Paragrafo/styles';

export const Descricao = styled(Para)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.cordeDestaque};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  border: none;
  cursor: pointer;
  text-align: center;
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 30px;
  left: 0;

  @media (max-width:768px){
    margin-bottom: 40px;
    text-align: center;
    margin-top: 40px;
  }
`;
