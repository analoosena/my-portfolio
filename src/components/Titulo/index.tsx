/* eslint-disable react/react-in-jsx-scope */
type Props = {
  children: string;
};

const Titulo = (props: Props) => <span>{props.children}</span>;

export default Titulo;
