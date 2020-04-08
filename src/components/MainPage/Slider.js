import React, { Component } from 'react';
import { Slider as FilterSlider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Slider extends Component {
  state = {
    value: null
  }

  componentDidMount() {
    const defaultValue = 0;
    this.setStateAndOnChangeProps(defaultValue)
  }
  
  handleChange = (e, value) => {
    this.setStateAndOnChangeProps(value);
  }

  setStateAndOnChangeProps = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  getValue = () => this.props.getValue(this.state.value);

  render() {
    const { value } = this.state;

    return (
      <div className="filter">
        <Typography gutterBottom>
          Where is warmer than
        </Typography>
        <FilterSlider
          value={value}
          onChange={this.handleChange}
          min={-60}
          max={60}
          valueLabelDisplay="auto"
        />
      </div>
    );
  }
}

export default Slider;
