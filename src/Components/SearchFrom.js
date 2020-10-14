import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchFrom extends Component {

    state = {
        query : ""
    }

    handleChange = (evt) => {
        this.setState({
            query : evt.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>Search Your Fav Food !!!</h1>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`}>Go !!!</Link>
            </div>
        );
    }
}

export default SearchFrom;