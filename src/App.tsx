import { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import { theme } from './lib/theme';
import { breakPt } from './lib/constants';

const Canvas = styled.main`
  width: 100%;
  height: max(100vh);
  background-color: ${theme.bg};
  display: grid;
  place-items: center;
  font-family: Ubuntu;

  @media screen and (${breakPt[720]}) {
    display: block;
    position: relative;
    padding-top: 100px;
  }
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
