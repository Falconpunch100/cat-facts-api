import {Link} from "react-router-dom"

function HomePage() {
    return (
        <>
            <header></header>
            <main>
                
            <div><Link to='/shibes'>Dogs</Link></div>
            <div><Link to='/cats'>Cats</Link></div>
            <div><Link to='/birds'>Birds</Link></div>
                
            </main>
        </>
    )
}


export default HomePage;