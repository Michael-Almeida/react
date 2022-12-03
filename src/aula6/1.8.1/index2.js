import React from 'react';
import { useState } from 'react';
import './style.css';

//componente
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

  //usando state
  const [personagens, setPersonagen] = useState(_personagens);

  const filtrarFamiliaBacker = () => {
    const novoArray = _personagens.filter((personagem) => {
      const ehDaFamilia = personagem.includes('Baker');
      return ehDaFamilia;
    });
    setPersonagen(novoArray);
  };

  const filtrarFamiliaRedfield = () => {
    const novoArray = _personagens.filter((personagem) => {
      const ehDaFamilia = personagem.includes('Redfield');
      return ehDaFamilia;
    });
    setPersonagen(novoArray);
  };

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <div>
        <button onClick={filtrarFamiliaBacker}>Familia Backer</button>
        <button onClick={filtrarFamiliaRedfield}>Familia Redfield</button>
      </div>
      <ul>
        {personagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <Personagens />;
}
