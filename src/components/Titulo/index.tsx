/* eslint-disable react/react-in-jsx-scope */
import { Titulo as TituloEstilo } from './styles';

export type Props = { //O props é um objeto que contém todas as propriedades (ou atributos) passadas para o componente.
  children: string; //Representa o texto ou conteúdo que será exibido dentro do componente
  fontSize?: number;  //Opcional, define o tamanho da fonte (em pixels).
};

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
);

export default Titulo;
