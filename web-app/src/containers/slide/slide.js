import React, { Component } from 'react'
import './slide.css';
import { getRate } from '../../API/RatesAPI';

export default class Slide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currencyValue: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rate !== this.props.rate) {
      this.getExchangeRate();
    }
  }

  componentDidMount() {
    this.getExchangeRate();
  }

  async getExchangeRate() {
    const result = await getRate(this.props.rate.base, this.props.rate.currency)
    this.setState({
      currencyValue: result.data.rates[this.props.rate.currency]
    })
  }

  render() {
    return (
      <div className={'slide-window'}>
        <img src={this.props.rate.image} alt={this.props.rate.image} />
        <span>{this.props.rate.base} to {this.props.rate.currency} : {this.state.currencyValue} </span>
      </div>
    );
  }
}