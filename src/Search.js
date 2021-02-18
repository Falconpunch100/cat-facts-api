import { useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
    let [amount, setAmount] = useState(1)
    let location = useLocation();
    console.log(location.pathname)

    async function searchAnimals() {
        const response = await fetch(`http://shibe.online/api${location.pathname}?count=${amount}&urls=true&httpsUrls=false`);
        //const data = await response.json()
        console.log(response)
      }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            searchAnimals()
        }}>
            <label>Search</label>
            <input type="number" placeholder="1-100" min="1" max="100" value={amount} onChange={(e) => { setAmount(Number(e.target.value))}}></input>
            <button type="submit">Submit</button>
        </form>
    )
}



export default Search;