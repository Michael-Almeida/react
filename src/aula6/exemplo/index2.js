import React from 'react';
import './style.css';

export default function WhatsApp() {
  const [apresentacao, setApresentacao] = React.useState('chat');

  const handleOnCLick = (valor) => setApresentacao(valor);
  return (
    <div>
      <h1>WhatsApp </h1>
      <div>
        <button onClick={() => handleOnCLick('chat')}> Chat</button>
        <button onClick={() => handleOnCLick('status')}> Status</button>
        <button onClick={() => handleOnCLick('chamadas')}> Chamadas</button>
      </div>
      {apresentacao === 'chat' && (
        <div>
          <p>chat 1 </p>
          <p>chat 2 </p>
          <p>chat 3 </p>
        </div>
      )}

      {apresentacao === 'status' && (
        <div>
          <p>Status 1 </p>
          <p>Status 2 </p>
          <p>Status 3 </p>
        </div>
      )}

      {apresentacao === 'chamadas' && (
        <div>
          <p>Chamadas 1 1 </p>
          <p>Chamadas 2 </p>
          <p>Chamadas 3 </p>
        </div>
      )}
    </div>
  );
}
