import './Fact.css';

function Fact({text, type}) {
    return(
        <div className="fact">
        <h6>{type}</h6>
        <p>{text}</p>
        </div>
    )
}


export default Fact;