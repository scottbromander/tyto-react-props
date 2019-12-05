import React, { Component } from 'react';
import './App.css'
import CreatureList from '../CreatureList/CreatureList';
import AddCreature from '../AddCreature/AddCreature';
import CreaturePreview from '../CreaturePreview/CreaturePreview';

class App extends Component {
  state = {
    newCreature: {
      name: '',
      origin: '',
    },
    creatureList: [
      { name: 'Unicorn', origin: 'Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Jackalope', origin: 'America' },
    ],
  };

  // bound to name input field
  handleNameChange = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        name: event.target.value,
      }
    });
  }

  // bound to origin input field
  handleOriginChange = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        origin: event.target.value,
      }
    });
  }

  // handleChangeFor = (event, propertyName) => {
  //   this.setState({
  //     newCreature: {
  //       ...this.state.newCreature,
  //       [propertyName]: event.target.value,
  //     }
  //   });
  // }

  handleClick = () => {
    this.setState({
      creatureList: [
        ...this.state.creatureList,
        this.state.newCreature
      ],
    });
  }

  render() {
    return (
      <main>
        <h1>Mythical Creatures of the World</h1>

        <AddCreature
          handleNameChange={this.handleNameChange}
          handleOriginChange={this.handleOriginChange}
          handleClick={this.handleClick}
        />
        <CreaturePreview name={this.state.newCreature.name} origin={this.state.newCreature.origin}/>
        <CreatureList creatureList={this.state.creatureList}/>
      </main>
    );
  }
}

export default App;
