import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import RussianCities from './russianCities';

export default class Search extends React.Component {
  options = RussianCities;

  state = {
    inputValue: '',
    currentItem: null
  }

  handleInputValue = ({ target: { value }}) => {
    this.setState({ inputValue: value });
  }

  handleSelect = (e, value) => {
    this.setState({ currentItem: value, inputValue: '' });
  }

  render() {
    const { inputValue, currentItem } = this.state;
    const { onAdd } = this.props;

    return (
      <div className="add-city">
        <Autocomplete
          options={this.options}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          size={'small'}
          open={inputValue.length >= 3 && currentItem === null}
          onChange={this.handleSelect}
          renderInput={(params) => <TextField
            {...params}
            label="City"
            variant="outlined"
            onChange={this.handleInputValue}
          />}
        />
        <Button
          onClick={() => onAdd(currentItem)}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}
