import React from 'react';
import '../css/Luz.css';

//Dumb component
//Stateless component
//Functional component

// const Luz = () => {

const CLOSED_EYE = 50;
const OPENED_EYE = 60;

//CHILDREN
class Luz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'pink',
      width: CLOSED_EYE,
    };
  }

  handleWidthChange = () => {
    const { width } = this.state;

    //Forma 3 (aun mas limpia) de resolverlo
    const newWidth = width === CLOSED_EYE ? OPENED_EYE : CLOSED_EYE;
    this.setState({ width: newWidth });

    //Forma 2 (mas limpia) de resolverlo
    // if (currentWidth === 50) return this.setState({ width: 60 });
    // this.setState({ width: 50 });

    //Forma 1 de resolverlo
    // if (currentWidth === 50) {
    //   this.setState({ width: 60 });
    // } else {
    //   this.setState({ width: 50 });
    // }
  };

  render() {
    const { isRounded } = this.props;
    const { backgroundColor, width } = this.state;

    return (
      <div
        // style={{
        //   backgroundColor,
        //   width,
        //   borderRadius: isRounded === true ? 25 : 0,
        // }}
        style={{ backgroundColor, width, borderRadius: isRounded ? 25 : 0 }}
        className='luz'
        onClick={this.handleWidthChange}
      />
    );
  }
}

export default Luz;
