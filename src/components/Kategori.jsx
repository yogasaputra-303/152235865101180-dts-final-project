import {FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiFullPizza} from 'react-icons/gi';
import styled from 'styled-components';
import{NavLink} from 'react-router-dom';

function Kategori() {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
            <GiFullPizza />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Chinese'}>
            <GiNoodles />
            <h4>Chinese</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Kategori