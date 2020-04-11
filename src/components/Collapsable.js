import React from 'react';
import '../stylesheets/Collapsable.scss';
class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'hidden',
      arrow: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextDisplay;
      let nextArrow;

      if (prevState.display === 'hidden') {
        nextDisplay = '';
        nextArrow = 'hidden';
      } else {
        nextDisplay = 'hidden';
        nextArrow = '';
      }
      return { display: nextDisplay, arrow: nextArrow };
    });
  }

  render() {
    const { props } = this;

    return (
      <div>
        <div class='title-collapse js-title-collapse'>
          <div class='title-collapse__box'>
            <img class='title-collapse__box__icon' src={props.icon} alt='Icono' />
            <h2 class='title-collapse__box__title'>{props.title}</h2>
          </div>
          <div className={this.state.arrow} onClick={this.handleClick}>
            <i class='fas fa-chevron-down title-collapse__arrow'></i>
          </div>
          <div className={this.state.display} onClick={this.handleClick}>
            <i class='fas fa-chevron-up title-collapse__arrow'></i>
          </div>
        </div>
        <div className={`collapsable-content ${this.state.display}`}>{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsable;
