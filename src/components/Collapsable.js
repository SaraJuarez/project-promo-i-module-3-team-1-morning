import React from 'react';
import '../stylesheets/Collapsable.scss';
class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.handleCollapsable();
  };

  render() {
    let arrow = this.props.isOpen ? 'fa-chevron-down' : 'fa-chevron-up';

    return (
      <div>
        <div className='title-collapse js-title-collapse'>
          <div className='title-collapse__box'>
            <img className='title-collapse__box__icon' src={this.props.icon} alt='Icono' />
            <h2 className='title-collapse__box__title'>{this.props.title}</h2>
          </div>
          <div onClick={this.handleClick}>
            <i className={`fas ${arrow} title-collapse__arrow`}></i>
          </div>
        </div>
        <div className={`collapsable-content ${this.props.isOpen ? '' : 'hidden'}`}>{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsable;
