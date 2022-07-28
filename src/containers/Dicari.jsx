import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom"

function Dicari() {
    const [dicariRecipes, setDicariRecipes] = useState ([]);
    let params = useParams();

    const getDicari = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setDicariRecipes(recipes.results);
      };

      useEffect(() => {
        getDicari(params.pencarian);
      },[params.pencarian]);

  return <Grid>
    {dicariRecipes.map((item)=> {
      return(
        <Card key={item.id}>
          <Link to={'/resep/' + item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          </Link> 
        </Card>
      )
    })}
  </Grid>

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Dicari;