/* eslint-disable react/react-in-jsx-scope */
import { Para } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => ( //Desestruturação direta: Em vez de usar props como um objeto, as props são desestruturadas diretamente no parâmetro da função.
  <Para tipo={tipo} fontSize={fontSize}>
    {children}
  </Para>
);

export default Paragrafo;
