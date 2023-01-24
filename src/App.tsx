import { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import { theme } from './lib/theme';
import { breakPt } from './lib/constants';

const Canvas = styled.main`
  width: 100%;
  height: max(667px, 100vh);
  display: grid;
  place-items: center;
  font-family: Ubuntu;

  @media screen and (${breakPt[720]}) {
    display: block;
    position: relative;
    padding-top: 100px;
  }
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.bg};
  z-index: -1;
`


function App() {

  return (
    <Canvas>
      <Background/>
      <Card/>

    </Canvas>
  )
}

export default App
