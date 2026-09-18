import { Component } from 'react';
import ChildComponent from './ChildComponent.jsx';
import { initialData } from './data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: initialData,
    };
  }

  handleFeedPet = (id) => {
    this.setState((previousState) => ({
      pets: previousState.pets.map((pet) =>
        pet.id === id
          ? {
              ...pet,
              image: pet.happyImage,
              status: 'Happy and well fed!',
              isHappy: true,
            }
          : pet,
      ),
    }));
  };

  render() {
    return (
      <main className="app-container">
        <header className="app-header">
          <p className="eyebrow">Welcome to</p>
          <h1>Sunny Paws Kennel</h1>
          <p className="intro">
            Our pets are waiting for a little kindness. Choose a friend and
            treat them to a snack!
          </p>
        </header>

        <section className="pets-grid" aria-label="Pets in the kennel">
          {this.state.pets.map((pet) => (
            <ChildComponent
              key={pet.id}
              id={pet.id}
              name={pet.name}
              image={pet.image}
              status={pet.status}
              isHappy={pet.isHappy}
              onFeed={this.handleFeedPet}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
