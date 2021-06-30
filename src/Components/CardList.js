import React,{ useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'


const CardList = () => {
    const [drink,setDrink]=useState([]);
    const [input,setInput]=useState("");
    const [search,setSearch]=useState("");

    const handleSearch=(e)=>{
        e.preventDefault();
        setSearch(input);
        setInput("");
    }

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        .then((res)=>setDrink(res.data.drinks))
        .catch((err)=>console.log(err));
    }, [])
    return (
        <div className='cardlist'>
            <form onSubmit={handleSearch} style={{marginLeft:'550px',marginTop:'60px'}}> 
                <input type='text' placeholder='Search Cocktail' value={input} onChange={(e)=>setInput(e.target.value) }  />
                <button>search</button>
            </form>
            {
                drink
                .filter(el=>el.strDrink.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((el)=> <Card key={el.idDrink} el={el} />)
            }
        </div>
    )
}

export default CardList
