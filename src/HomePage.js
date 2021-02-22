import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

function HomePage() {

    return (
        <>
            <header>Cat Facts</header>
            <main>
                
            <div><Link to='/shibes'>Dogs</Link></div>
            <div><Link to='/cats'>Cats</Link></div>
            <div><Link to='/horses'>Horses</Link></div>
                
            </main>
        </>
    )
}


export default HomePage;