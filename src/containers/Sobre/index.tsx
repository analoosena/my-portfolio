/* eslint-disable react/react-in-jsx-scope */

import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import  {GithubSessao}  from './styles';

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo='principal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        praesentium vitae hic error, qui facere libero minima aut explicabo in
        veniam eveniet fuga a ex accusantium, enim quo, incidunt odit.
      </Paragrafo>
      <GithubSessao>
        <img src="https://github-readme-stats.vercel.app/api?username=analoosena&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=analoosena&layout=compact&langs_count=7&theme=dracula" alt="" />
      </GithubSessao>
    </section>
  );
};

export default Sobre;
