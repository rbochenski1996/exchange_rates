import React, { Component } from 'react';
import Slide from '../slide/slide';
import LeftArrow from '../../presentationals/arrows/left-arrow';
import RightArrow from '../../presentationals/arrows/right-arrow';
import { rates as ratesConst } from '../../constants/rates';
import './carousel.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rates: ratesConst,
      currentIndex: 0,
    }
  }

  goToPrevious = () => {
    if (this.state.currentIndex === 0)
      return this.setState(prevState => ({
        currentIndex: prevState.rates.length - 1
      }));

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }))
  }

  goToNext = () => {
    if (this.state.currentIndex === this.state.rates.length - 1) {
      return this.setState({
        currentIndex: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    const { rates, currentIndex } = this.state;
    return (
      <div className="slider">
            <LeftArrow
              action={this.goToPrevious}
            />

            <Slide rate={rates[currentIndex]} />

            <RightArrow
              action={this.goToNext}
            />
      </div>
    );
  }
}