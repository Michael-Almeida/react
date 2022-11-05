import React from 'react';
import './style.css';

const Personagens = () => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const personagensFiltrados = personagens
    .filter((personagem) => {
      const EhdaFamilia = personagens.includes('Redfield');
      return EhdaFamilia;
    })
    .map((props) => {
      const { personagens } = props;
      return (
        <ul>
          {personagens.map((personagem) => (
            <li>{personagem}</li>
          ))}
        </ul>
      );
    });

  return (
    <div>
      <h3>personagensFiltrados</h3>
      <ul>
        {personagens.map((personagem) => (
          <li>{personagensFiltrados}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <Personagens />;
}
