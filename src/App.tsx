import React, { useState } from 'react';

const App: React.FC = () => {
  const [ selectedTeam, setSelectedTeam ] = useState<number | string>('aguardando...');

  const getRandomNumberInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <h1>Sorteio de equipes</h1>

      <h4 className="font-medium text-xl">A sua equipe é a</h4>
      <h2 className="font-bold text-3xl">{selectedTeam}</h2>

      <button onClick={ () => setSelectedTeam(getRandomNumberInRange(1, 8)) }>Sortear</button>
    </>
  );
}

export default App;