import { useState } from "react";

function Search({handleSubmit}) {
    let [amount, setAmount] = useState(1)


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(amount)
        }}>
            <label>Search</label>
            <input type="number" placeholder="1-100" min="1" max="100" value={amount} onChange={(e) => { setAmount(Number(e.target.value))}}></input>
            <button type="submit">Submit</button>
        </form>
    )
}



export default Search;