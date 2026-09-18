import { Component } from 'react';

class ChildComponent extends Component {
  handleClick = () => {
    this.props.onFeed(this.props.id);
  };

  render() {
    const { name, image, status, isHappy } = this.props;

    return (
      <article className={`pet-card ${isHappy ? 'pet-card--happy' : ''}`}>
        <div className="pet-image-wrapper">
          <img className="pet-image" src={image} alt={`${name} looking ${isHappy ? 'happy' : 'sad'}`} />
          <span className="mood-badge" aria-label={`Mood: ${isHappy ? 'happy' : 'sad'}`}>
            {isHappy ? '😊' : '😔'}
          </span>
        </div>
        <div className="pet-details">
          <h2>{name}</h2>
          <p className="status-label">Current status</p>
          <p className="pet-status" aria-live="polite">{status}</p>
          <button type="button" onClick={this.handleClick} disabled={isHappy}>
            {isHappy ? 'Thanks for the treat!' : `Feed ${name}`}
          </button>
        </div>
      </article>
    );
  }
}

export default ChildComponent;
