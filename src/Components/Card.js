import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({el}) => {
    return (
        <div>
            <div className="card">
                <img className="cardimg" src={el.strDrinkThumb} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{el.strDrink}</h5>
                    <p className="card-text">{el.strCategory}</p>
                    <Link to={`/details/${el.idDrink}`}><button>Details</button></Link>
                </div> 
            </div>
        </div>
    )
}

export default Card
