import {GiNoodles, GiSandwich, GiFullPizza, GiHotDog} from 'react-icons/gi';
import styled from 'styled-components';
import{NavLink} from 'react-router-dom';

function Kategori() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <GiFullPizza />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/Spanish'}>
            <GiHotDog />
            <h4>Spanish</h4>
        </Slink>
        <Slink to={'/cuisine/Chinese'}>
            <GiNoodles />
            <h4>Chinese</h4>
        </Slink>
        <Slink to={'/cuisine/French'}>
            <GiSandwich />
            <h4>French</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #484848, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    position: relative;

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        position: absolute;
        bottom: 55%;
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
        
    }

`

export default Kategori;