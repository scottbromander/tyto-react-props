import React, { Component } from 'react';

class AddCreature extends Component {

    render() {
        return (
            <div>
                <h2>Add a Creature</h2>
                <input placeholder="name" onChange={this.props.handleNameChange} />
                <input placeholder="origin" onChange={this.props.handleOriginChange} />
                <button onClick={this.props.handleClick}>Add Creature</button>
            </div>
        )
    }
}

export default AddCreature;