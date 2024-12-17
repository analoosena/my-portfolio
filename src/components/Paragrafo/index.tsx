/* eslint-disable react/react-in-jsx-scope */
import { Para } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario'
};

const Paragrafo = ({ children, tipo = 'principal' }: Props) => <Para tipo={tipo}>{children}</Para>;

export default Paragrafo;
