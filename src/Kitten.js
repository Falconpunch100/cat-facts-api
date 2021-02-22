import Search from "./Search.js"
const catFacts = "https://cat-fact.herokuapp.com"

function Kitten() {
    let [catFacts, setcatFacts] = useState([])
    useEffect(() => {
        setcatFacts()
    }, [])

    async function handleSubmit(text) {
        const response = await fetch(url + `amiibo/?${pageType}=` + text);
        const data = await response.json()
    }

    return (
        <>
        <Search handleSub></Search>
        </>
    )
}
    
export default Kitten;