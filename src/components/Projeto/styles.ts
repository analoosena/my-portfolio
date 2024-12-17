import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corSecundaria};
  padding: 12px;
  border-radius: 4px;
`;

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.cordeFundo};
  font-size: 12px;
  background-color: ${(props) => props.theme.cordeDestaque};
  text-decoration: none;
  padding: 5px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 5px;
  cursor: pointer;
`;
