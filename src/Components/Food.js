import React, { Component } from 'react';

class Food extends Component {
    render() {

        const name = this.props.match.params.name;

        const url = `https://source.unsplash.com/600x400/?${name}`;

        return (
            <div>
                <h1>I Love To Eat {name}</h1>
                <img src={url} alt={name} /> 
            </div>
        );
    }
}

export default Food;