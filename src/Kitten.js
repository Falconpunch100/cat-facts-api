import Search from "./Search.js"
import { useEffect, useState } from "react"
import Fact from "./Fact.js"
import { useLocation } from "react-router-dom";

const catFactsURL = "https://cat-fact.herokuapp.com/facts/random?"


function Kitten() {
    let [catFacts, setcatFacts] = useState([])
    let location = useLocation();
    let animalType = location.pathname.substr(1);
    console.log(animalType)
    async function handleSubmit(number) {
        const response = await fetch(catFactsURL + `animal_type=${animalType}&amount=${number}`);
        const data = await response.json()
        console.log(data)
        setcatFacts(data)
    }

    return (
        <>
        <Search handleSubmit={handleSubmit}></Search>
        {catFacts.map((oneFact) => {
            return (
                <Fact key={oneFact._id} type={animalType} text={oneFact.text}></Fact>
            )
        })}
        </>
    )
}
    
export default Kitten;