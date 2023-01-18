import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import styled from 'styled-components';
import Card from './components/Card';
import { theme } from './lib/theme';

const Canvas = styled.main`
  width: 100%;
  height: max(100vh);
  background-color: ${theme.bg};
  display: grid;
  place-items: center;
  font-family: Ubuntu;
`


function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas>
      <Card/>
    </Canvas>
  )
}

export default App
