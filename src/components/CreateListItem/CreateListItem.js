import React, { Component } from 'react';

class CreatureListItem extends Component {
    render() {
        return (
            <li >
                {this.props.name} originated in {this.props.origin}
            </li>
        )
    }
}

export default CreatureListItem;