import React, { useState,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'


const Details = () => {
    const [details,setDetails]=useState([]);
    const {id}=useParams();

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>setDetails(res.data.drinks[0]))
        .catch((err)=>console.log(err));
    }, [])
    return (
        <div>
            <div className="detail">
                <img src={details.strDrinkThumb} alt="..." style={{borderRadius:'25px',width:'300px',marginTop:'40px'}} />
                <h2>Name: {details.strDrink}</h2>
                <h4>Ingredient1: {details.strIngredient1}</h4>
                <h4>Ingredient2: {details.strIngredient2}</h4>
                <h4>Ingredient3: {details.strIngredient3}</h4>
            </div>
            <div className="butt">
                <Link to="/"><button>Go Back</button></Link >
            </div>
        </div>
    )
}

export default Details
