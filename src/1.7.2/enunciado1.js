import React from 'react';
import './style.css';

const Personagens = function () {
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
};

export default function App() {
  return <Personagens fmilia={'Redfield'} />;
}
