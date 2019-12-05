import React, { Component } from 'react';
import CreatureListItem from '../CreateListItem/CreateListItem';

class CreatureList extends Component {
    render() {

        const htmlArray = this.props.creatureList.map((item, index) => {
            return (
                <CreatureListItem key={index} name={item.name} origin={item.origin}/>
            )
        });

        return (
            <div>
                <h2>Creature List</h2>
                <ul>
                    {htmlArray}
                </ul>
            </div>
        )
    }
}

export default CreatureList;