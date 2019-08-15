import React from "react";
import Character from "./Character";
import '../App.css';

import { connect } from 'react-redux';

function StarwarsCharacters(props) {

    return (

        <div className="rowz">
            {props.characters.map(chars => (
                <Character chars={chars} />
            ))}
        </div>

    );
}


const mapStateToProps = state => {
    return {
        characters: state.chars
    };
};
export default connect(
    mapStateToProps,
    {}
)(StarwarsCharacters);