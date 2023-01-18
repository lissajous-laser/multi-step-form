import styled from 'styled-components';
import bgImg from '../assets/images/bg-sidebar-desktop.svg';
import favicon from '../assets/images/favicon-32x32.png';


const Container = styled.nav`
  width: 274px;
  height: 568px;
  background-image: url(${bgImg});
  margin-left: 16px;
  margin-top: 16px;
`


export default function Navbar() {
  return (
    <Container/>
  );
}