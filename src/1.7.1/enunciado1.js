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

//Enunciado 1

const titulos = filmes
  .map((filme) => filme.nome)
  .map((nome) => <h4>{nome}</h4>);

const titulos2 = filmes
  .map((filme) => filme.diretores)
  .map((diretores) => <li>{diretores}</li>);

export default function App() {
  return (
    <div>
      {'Filmes:'}
      {titulos} {'Diretores:'}
      <ul>{titulos2}</ul>
    </div>
  );
}

/* 
tentativa 2
const titulos = filmes
  .map((filme) => (filme.nome)&& (filme.diretores))
  //.map((filme)=>filme.diretores)
  .map((nome) => <h4>{nome}</h4>)
  .map((diretores) => <h4>{diretores} </h4>)
  */

/* 
tentativa 3
  const titulos = filmes
  .map((filme) => {
    const nome =filme.nome
    const diretor = filme.diretores}) */
