/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import EstiloGlobal from './styles';

type ButtonProps = {
    principal?: boolean;
};

const Button = styled.button<ButtonProps>`
    background: ${(props) => (props.principal ? 'green' : 'blue')};
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0 1em;
    padding: 0.25em 1em;
`;
const DangerButton = styled(Button)`
    background-color: red;
    color: #fff;
`;

function Teste() {
    return (
        <div>
            <EstiloGlobal />
            Olá
            <Button principal>Enviar</Button>
            <Button principal={false}>Cancelar</Button>
            <DangerButton>Voltar</DangerButton>
        </div>
    );
}
export default Teste;
