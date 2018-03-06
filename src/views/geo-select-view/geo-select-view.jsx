import React, {Component} from 'react';
import './geo-select-view.css';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';
import CountrySelectView from '../country-select-view/country-select-view';
import CitySelectView from '../city-select-view/city-select-view';

class GeoSelectView extends Component {
    static propTypes = {
        countries: PropTypes.array.isRequired,
        countryCode: PropTypes.string.isRequired,
        onCountrySelect: PropTypes.func.isRequired,
        cities: PropTypes.array.isRequired,
        cityId: PropTypes.number.isRequired,
        onCitySelect: PropTypes.func.isRequired
    };

    render() {
        const props = this.props;

        return (
            <div className="geo-select-view">
                <Row>
                    <Col md={6} sm={6}>
                        <CountrySelectView
                            countries={props.countries}
                            countryCode={props.countryCode}
                            onCountrySelect={props.onCountrySelect}
                        />
                    </Col>

                    <Col md={6} sm={6}>
                        <CitySelectView
                            cities={props.cities}
                            cityId={props.cityId}
                            onCitySelect={props.onCitySelect}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GeoSelectView;
