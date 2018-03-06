import React, {Component} from 'react';
import './weather-display-view.css';

import PropTypes from 'prop-types';

class WeatherDisplayView extends Component {
    static propTypes = {
        cityId: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {weatherData: null};
    }
    componentDidMount() {
        const cityId = this.props.cityId;
        const URL = 'http://api.openweathermap.org/data/2.5/weather?id=' +
            cityId +
            '&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';

        fetch(URL)
            .then(res => res.json())
            .then(json => {
                this.setState({weatherData: json});
            });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) {
            return '';
        }

        if (weatherData.cod !== 200) {
            return (
                <div>
                    <h3>Ошибка запроса данных {weatherData.cod}</h3>
                    <p>{weatherData.message}</p>
                </div>
            );
        }

        const weather = weatherData.weather[0];
        const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png';

        return (
            <div>
                <h1 className="weather-display-view__title">
                    {weather.main} in {weatherData.name}

                    <img
                        className="weather-display-view__icon"
                        src={iconUrl}
                        alt={weatherData.description}
                    />
                </h1>

                <p>Current: {weatherData.main.temp}°</p>
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
}

export default WeatherDisplayView;
