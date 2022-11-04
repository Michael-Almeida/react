import React from 'react';
import './style.css';

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
  {
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  },
];

//resolução feita 1

/* const titulos = filmes
  .map((filme) => filme.nome)
  .map((nome) => <h4>{nome}</h4>);

const titulos2 = filmes
  .map((filme) => filme.diretores)
  .map((diretores) => <li>{diretores}</li>);
 */

//criar componentes sempre com PascalCase
function DiretoresParaExibir(props) {
  const { diretores } = props;
  return (
    <ul>
      {diretores.map((diretor) => (
        <li>{diretor}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const filmesParaExibir = filmes.map((filme) => {
    const { nome, diretores } = filme; //destructor
    return {
      nome,
      diretores,
    };
  });
  return (
    <div>
      {filmesParaExibir.map((filme) => (
        <div>
          <h1>{filme.nome}</h1>
          <p>Diretores:</p>
          <DiretoresParaExibir diretores={filme.diretores} />
        </div>
      ))}
    </div>
  );
}
