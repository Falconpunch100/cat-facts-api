import {Link} from "react-router-dom"


function HomePage() {

    return (
        <>
            <header>Cat Facts</header>
            <main>
                
            <div><Link to='/dog'>Dogs</Link></div>
            <div><Link to='/cat'>Cats</Link></div>
            <div><Link to='/horse'>Horses</Link></div>
                
            </main>
        </>
    )
}


export default HomePage;