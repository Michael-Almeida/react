import React from 'react';
import './style.css';

const Personagens = () => {
  const personagens = [
    'Jill Valentine',
    'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Lucas Baker',
  ];
};

export const BotaoPersonagens = (props) => {
  const { personagem } = props;
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <BotaoPersonagens batata="" />;
}

// BotqoPersonagens({batata: ''})
