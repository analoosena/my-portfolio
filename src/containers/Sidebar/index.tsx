/* eslint-disable react/react-in-jsx-scope */
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';
import { BotaoTema, Descricao, SideBarContainer } from './styles';

type Props = {
  trocaTemaProp: () => void; //Uma função sem argumentos e sem retorno. Ela será usada para alternar o tema.
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>Ana Luíza Sena</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          analoosena
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheira Front end
        </Descricao>
        <BotaoTema onClick={props.trocaTemaProp}>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
  );
};

export default Sidebar;
