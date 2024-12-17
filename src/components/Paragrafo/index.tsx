/* eslint-disable react/react-in-jsx-scope */
import { Para } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <Para tipo={tipo} fontSize={fontSize}>
    {children}
  </Para>
);

export default Paragrafo;
