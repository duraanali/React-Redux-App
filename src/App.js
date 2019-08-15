import React, { useEffect } from "react";
import { getData } from "./actions";
import StarwarsCharacters from "./components/StarwarsCharacters"

import { connect } from "react-redux";
const App = (props) => {


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

  useEffect(() => {
    props.getData();
    console.log(getData())
  }, []);

  return (
    <div className="container">
      <h1 className="display-2">Star Wars Character List</h1>
      <StarwarsCharacters />
    </div>
  );
}

export default connect(
  null,
  { getData }
)(App);