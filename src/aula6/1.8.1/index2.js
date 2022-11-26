import React from 'react';
import { useState } from 'react';
import './style.css';

const Personagens = () => {
  const _personagens = [
    'Jill Valentine',
    'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Lucas Baker',
  ];

  const [personagens, setPersonagen] = useState(_personagens);

  const filtrarFamiliaBacker = () => {
    _personagens.filter((personagem) => {
      const ehDaFamilia = personagem.includes('Baker');
      setPersonagen(ehDaFamilia);
    });
  };

  const filtrarFamiliaRedfield = () => {
    _personagens.filter((personagem) => {
      const ehDaFamilia = personagem.includes('Redfield');
      setPersonagen(ehDaFamilia);
    });
  };

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <button onClick={filtrarFamiliaBacker}>Familia Backer</button>
      <button onClick={filtrarFamiliaRedfield}>Familia Redfield</button>
      <ul>
        {_personagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <Personagens />;
}
