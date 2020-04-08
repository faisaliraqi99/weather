import React, { Component } from 'react';
import axios from 'axios';

import WeatherCard from './WeatherCard';
import Slider from './Slider';

class WeatherCards extends Component {
  state = {
    citiesData: [],
    fetchedCities: [],
    temp: null
  }

  componentDidMount() {
    this.fetchCities();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      await this.fetchCities();
      this.handleTemperatureFilter();
    };
  }

  async fetchCities() {
    const { cities } = this.props;
    if (cities === undefined) return;
    const fetches = await Promise.all(cities.map(city => this.fetchCityWeather(city)));
    const citiesData = fetches.map(({ data }) => data);
    return new Promise((resolve) => {
      this.setState({ citiesData, fetchedCities: citiesData }, resolve);
    });
  }

  fetchCityWeather(city) {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        id: city.id,
        appid: '72f80d8fa01e589fa18f473e6d4dd484',
        units: 'metric'
      }
    })
  }

  handleTemperatureFilter = (value) => {
      const { fetchedCities, temp } = this.state;
      const currentTemp = value === undefined ? temp : value;
      const filteredData = fetchedCities.filter(city => city.main.temp >= currentTemp);
      this.setState({ citiesData: filteredData, temp: currentTemp });
  }

  render() {
    const { citiesData } = this.state;
    const { onDelete } = this.props;

    return (<>
      <Slider onChange={this.handleTemperatureFilter} />
      <div className="weather-cards">
        {citiesData.map(cityData => <WeatherCard onDelete={onDelete} key={cityData.id} data={cityData} />)}
      </div>
    </>);
  }
}

export default WeatherCards;
