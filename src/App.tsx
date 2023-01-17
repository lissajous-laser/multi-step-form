import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import styled from 'styled-components';

const Canvas = styled.body`
  width: 100%;
  height: max-content(100vh, 100%);
  background-color: white;
  /* border: 1px solid blue; */
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>

    </Canvas>
  )
}

export default App
