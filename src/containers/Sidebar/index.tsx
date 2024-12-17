/* eslint-disable react/react-in-jsx-scope */
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';
import { BotaoTema, Descricao, SideBarContainer } from './styles';

const Sidebar = () => {
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
        <BotaoTema>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
  );
};

export default Sidebar;
