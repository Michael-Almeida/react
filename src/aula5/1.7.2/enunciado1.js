import React from 'react';
import './style.css';

/* const Personagens = function () {
  const { personagens } = props;
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const personagensFiltrados = personagens
    .filter((personagen) => {
      const EhdaFamilia = personagens.includes('Redfield');
      return EhdaFamilia;
    })
    .map((personagen) => <li>{props}</li>);

  return (
    <div>
      <h3>personagens Filtrados</h3>
      <ul>
        {personagens.map((personagen) => (
          <li>{personagensFiltrados}</li>
        ))}
      </ul>
    </div>
  );
}; */

//personagens
const personagens = [
  'Jill Valentine',
  'Claire Redfield',
  'Ada Wong',
  'Chris Redfield',
  'Leon S. Kennedy',
  'Albert Wesker',
];

//função para filtrar ok
const PersonagensFiltrados = personagens
  .filter((personagem) => {
    const ehDaFamilia = personagem.includes('Redfield');
    return ehDaFamilia;
  })
  .map((personagen) => console.log(personagen));
/*   .map((personagen) => <li>{personagen}</li>); */

export const PersonagensRender = (props) => {
  const {} = props;
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {PersonagensFiltrados.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <PersonagensRender familia={'Redefield'} />;
  /*  <Personagens fmilia={'Redfield'} />;
   */
}
