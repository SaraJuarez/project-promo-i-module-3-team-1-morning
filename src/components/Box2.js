import React from 'react';
import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import iconDesign from '../images/object-ungroup-regular.svg';
import iconFill from '../images/keyboard-regular.svg';
import iconShare from '../images/share-alt-solid.svg';

import '../stylesheets/Box2.scss';

class Box2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disena: true, //la pesteña diseña está abierta al inicio
      rellena: false,
      comparte: false,
    };

    this.handleDisena = this.handleDisena.bind(this);
    this.handleRellena = this.handleRellena.bind(this);
    this.handleComparte = this.handleComparte.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleInputFile = this.handleInputFile.bind(this);
  }

  handleInputs = (value) => {
    this.props.handlefunction(value);
  };

  handleInputFile = (value) => {
    this.props.handleSaveImg(value);
  };

  handleDisena() {
    if (this.state.disena === true) {
      this.setState({
        disena: false,
        rellena: false,
        comparte: false,
      });
    } else {
      this.setState({
        disena: true,
        rellena: false,
        comparte: false,
      });
    }
  }

  handleRellena() {
    if (this.state.rellena) {
      this.setState({
        disena: false,
        rellena: false,
        comparte: false,
      });
    } else {
      this.setState({
        disena: false,
        rellena: true,
        comparte: false,
      });
    }
  }

  handleComparte() {
    if (this.state.comparte) {
      this.setState({
        disena: false,
        rellena: false,
        comparte: false,
      });
    } else {
      this.setState({
        disena: false,
        rellena: false,
        comparte: true,
      });
    }
  }

  render() {
    console.log('this.props', this.props.stateInfo);
    return (
      <ul className='container-box__two'>
        <li className='collapse'>
          <Collapsable title='Diseña' icon={iconDesign} handleCollapsable={this.handleDisena} isOpen={this.state.disena}>
            <Design handlePalette={this.props.handlePalette} properties={this.props.stateInfo} />
          </Collapsable>
        </li>
        <li className='collapse'>
          <Collapsable title='Rellena' icon={iconFill} handleCollapsable={this.handleRellena} isOpen={this.state.rellena}>
            <Fill handleInputsforFill={this.handleInputs} handleInputforImg={this.handleInputFile} photo={this.props.photo} properties={this.props.stateInfo} />
          </Collapsable>
        </li>
        <li className='collapse'>
          <Collapsable title='Comparte' icon={iconShare} handleCollapsable={this.handleComparte} isOpen={this.state.comparte}>
            <Share stateInfo={this.props.stateInfo} />
          </Collapsable>
        </li>
      </ul>
    );
  }
}

export default Box2;
