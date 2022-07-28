import Pages from "./containers/Pages";
import Kategori from "./components/Kategori";
import { BrowserRouter } from 'react-router-dom';
import Pencarian from "./components/Pencarian";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"} > Sriwijaya Resto </Logo>
      </Nav>
        <Pencarian />
        <Kategori />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-context: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App;
