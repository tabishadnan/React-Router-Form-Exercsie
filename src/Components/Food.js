import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';

class Food extends Component {

    render() {

        const name = this.props.match.params.name;

        const url = `https://source.unsplash.com/600x400/?${name}`;

        return (
            <div>
                {/\d/.test(name) ? <Redirect to="/error" /> : <div>
                    <h1>I Love To Eat {name}</h1>
                <img src={url} alt={name} /> 
                </div>}
                <p>
                <Link to="/">Go To Back!!!</Link>
                </p>
            </div>
        );
    }
}

export default Food;