import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imnav">
                <a href="/"><img src="/image/Capture.PNG" alt='...' style={{marginTop:'15px',marginLeft:'10px',borderRadius:'25px'}}/></a>
            </div>
            <div className="text">
                <p><h1>Welcome to TheCocktailDB</h1></p>
            </div>
        </div>
    )
}

export default Navbar
