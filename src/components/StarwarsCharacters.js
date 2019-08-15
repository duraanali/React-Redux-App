import React from "react";
import Character from "./Character";
import '../App.css';

import { connect } from 'react-redux';

import { getData } from '../actions';

function StarwarsCharacters(props) {
    console.log('character', props.characters)
    return (

        <div>
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
    { getData }
)(StarwarsCharacters);