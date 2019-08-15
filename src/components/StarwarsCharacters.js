import React from "react";
import Character from "./Character";
import '../App.css';

function StarwarsCharacters(props) {

    return (

        <div className="row sidebyside">
            <div className="col-md-4">
                {props.chars.map(chars => (
                    <Character chars={chars} />
                ))}
            </div>
        </div>

    );
}


export default StarwarsCharacters;