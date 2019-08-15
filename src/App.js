import React from "react";
import './App.css';
import StarwarsCharacters from "./components/StarwarsCharacters"


const App = () => {


  // const [chars, setChar] = useState([]);

  // const fetchCharacters = () => {
  //   axios
  //     .get(`https://swapi.co/api/people/`)
  //     .then(chars => {
  //       console.log(chars);
  //       setChar(chars.data.results);
  //     })
  //     .catch(err => console.log("YOU DONE BROKE IT!"));
  // };

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  return (
    <div>
      <h1 className="display-2">Star Wars Character List</h1>
      <StarwarsCharacters />
    </div>
  );
}

export default App;