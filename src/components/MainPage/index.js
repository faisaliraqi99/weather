import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import AddCity from './AddCity';
import WeatherCards from './WeatherCards';

class MainPage extends Component {
  state = {
    cities: [{
      id: 536203,
      name: 'Saint Petersburg',
      state: '',
      country: 'RU',
      coord: {
        lon: 30.25,
        lat: 59.916668
      }
    }, {
      id: 8260661,
      name: 'Emar',
      state: '',
      country: 'RU',
      coord: {
        lon: 132.156433,
        lat: 43.20417
      }
    }]
  }  

  handleAdd = (newCity) => {
    if (newCity === null) return;
    const { cities } = this.state;
    const newCities = [...cities, newCity].reduce((obj, city) => {
      if (obj[city.id] === undefined) obj.newArr.push(city);
      obj[city.id] = city.id;
      return obj
    }, { newArr: [] });
    this.setState({ cities: newCities.newArr });
  }

  handleDelete = (id) => {
    const { cities } = this.state;
    const newCities = cities.reduce((newArr, city) => city.id !== id ? [...newArr, city] : newArr, []);;
    this.setState({ cities: newCities });
  }

  render() {
    const { cities } = this.state;

    return (
      <Container>
        <AddCity onAdd={this.handleAdd} />
        <WeatherCards onDelete={this.handleDelete} cities={cities} />
      </Container>
    );
  }
}

export default MainPage;
