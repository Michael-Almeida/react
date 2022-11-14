import React from 'react';
import './style.css';

//componente 1
//props vai na função
function Jogo(props) {
  const { jogo = { paises: [] } } = props;
  return (
    <div class="jogo">
      <h1>{jogo.paises.join(' X ')}</h1>
      <ul>
        {jogo.resultado.map((resultado) => (
          <li>{resultado}</li>
        ))}
        {/* <li>{jogo.resultado[0]}</li>
        <li class="comparador">X</li>
        <li>{jogo.resultado[1]}</li> */}
      </ul>
    </div>
  );
}

//componente default de renderização
const jogos = [
  {
    paises: ['Brail', 'Alemanhã'],
    resultado: [7, 1],
  },
  {
    paises: ['Itália', 'França'],
    resultado: [3, 1],
  },
];
return (
  <div>
    {jogos.map((jogo) => (
      <jogo jogo={jogo} />
    ))}
  </div>
);

return <Jogo jogo={{ paises: ['Brasil', 'Alemanha'] }} />;
