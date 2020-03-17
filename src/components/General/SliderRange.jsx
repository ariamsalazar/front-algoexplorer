import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import './SliderRange.css';
import algoLogo from '../../assets/images/algo.png';
class SimpleSlider extends React.Component {
  state = {
    value: 30,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
        <div className="slider__container">
            <div className="slider__range">
                <Slider
                classes="slider-element"
                value={value}
                aria-labelledby="label"
                onChange={this.handleChange}
                />
            </div>
            <div className="slider__text">
                <div className="slider-t">
                    Weekly Earning
                    <span className="slider-v first">3.000 <img className="logoAlgo" src={algoLogo}/></span>
                </div>
                <div className="slider-t">
                    Montly Earning
                    <span className="slider-v">23.000 <img className="logoAlgo" src={algoLogo}/></span>
                </div>
                <div className="slider-t">
                    Yearly Earning
                    <span className="slider-v last">30.000 <img className="logoAlgo" src={algoLogo}/></span>
                </div>
            </div>
        </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleSlider;