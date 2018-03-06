import React, {Component} from 'react';

import geoData from './cities-list';
import countries from './countries';

import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import GeoSelectView from './views/geo-select-view/geo-select-view';
import WeatherDisplayView from './views/weather-display-view/weather-display-view';

class App extends Component {
    constructor() {
        super();

        this._getCities();

        const defaultCountryCode = countries[0].code;
        const defaultCity = this._getFirstCityByCountry(defaultCountryCode);

        this.state = {
            countryCode: defaultCountryCode,
            cityId: defaultCity.id
        };
    }

    _getCities() {
        this._cities = geoData.map(item => ({
            id: item.id,
            name: item.name
        }))
    }

    _getAllCitiesByCountry(countryCode) {
        return geoData.filter(
            item => item.country === countryCode
        );
    }

    _getFirstCityByCountry(countryCode) {
        return this._getAllCitiesByCountry(countryCode)[0];
    }

    _onCountrySelect(countryCode) {
        this.setState({countryCode: countryCode});

        const newCity = this._getFirstCityByCountry(countryCode);
        this.setState({cityId: newCity.id});
    }

    _onCitySelect(cityId) {
        this.setState({cityId: cityId});
    }

    render() {
        const countryCode = this.state.countryCode;
        const cities = this._getAllCitiesByCountry(countryCode);
        const cityId = this.state.cityId;

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Weather app
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={5} sm={5}>
                            <GeoSelectView
                                countries={countries}
                                countryCode={countryCode}
                                onCountrySelect={this._onCountrySelect.bind(this)}
                                cities={cities}
                                cityId={cityId}
                                onCitySelect={this._onCitySelect.bind(this)}
                            />
                        </Col>
                        <Col md={7} sm={7}>
                            <WeatherDisplayView key={cityId} cityId={cityId} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
