import React from 'react';
import './style.css';

const Card1 = (props) => {
  console.log('Card1');

  return <h2>{props.titulo}</h2>;
};

const Card2 = (props) => {
  console.log('Card2');

  return <h2>{props.titulo}</h2>;
};

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };
  /* const handleOnClick = () => {
    alert('Deu certo');
  }; */
  return (
    <div>
      <button id="botao" onClick={handleOnClick}>
        Clique em mim
      </button>
      <p>Count: {count}</p>
      <Card1 titulo="card1" />
      <Card2 titulo="card2" />
    </div>
  );
}
