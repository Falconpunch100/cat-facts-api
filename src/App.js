import './App.css';
import { Route } from "react-router-dom"
import HomePage from "./HomePage.js"
import Shibe from "./Dog.js"
import Kitten from "./Kitten.js"
import Bird from "./Horse.js"
import Search from "./Search.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/shibes">
          <Shibe></Shibe>
        </Route>
        <Route path="/cats">
          <Kitten></Kitten>
        </Route>
        <Route path="/birds">
          <Bird></Bird>
        </Route>
      </header>
    </div>
  );
}

//https://alexwohlbruck.github.io/cat-facts/ ; link to page
//https://cat-fact.herokuapp.com/facts/random?animal_type=horse&amount=10 ; example request

//Use a "fetch" request to get the API, data, and the user's input as a parameter
//TODO: Change Links, URL and Routes to match the animals' facts, and don't use a /;

// 3)  The user should be able to go to a specific page ( ex: /birds)  and enter a number; use that number as the amount of photos to ask from the API and make a 
//GET request to the endpoint and display the pictures (it's gonna be an array) using map() when the data is there

export default App;
