import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function Character(props) {

    return (

        <div className="card">
            <div className="card-header">
                <h3>Name: {props.chars.name}</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Height: {props.chars.height}</li>
                <li className="list-group-item"> Eye-Color: {props.chars.eye_color}</li>
                <li className="list-group-item">Gender: {props.chars.gender}</li>
            </ul>
        </div>
    )


}
