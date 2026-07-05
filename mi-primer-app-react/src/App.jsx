import { useState } from 'react';

function App() {
  const [mensaje] = useState('Hola Mundo desde React - P3');

  return <h1>{mensaje}</h1>;
}

export default App;