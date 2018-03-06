import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './city-select-view.css';

import {DropdownButton, MenuItem} from 'react-bootstrap';

class CitySelectView extends Component {
    static propTypes = {
        cities: PropTypes.array.isRequired,
        cityId: PropTypes.number.isRequired,
        onCitySelect: PropTypes.func.isRequired
    };

    _onSelect(i) {
        const props = this.props;
        const newCityId = props.cities[i].id;

        props.onCitySelect(newCityId);
    }

    render() {
        const props = this.props;
        const cities = props.cities;
        const cityId = props.cityId;

        const citiesMenu = cities.map((item, i) =>
            <MenuItem
                key={i}
                eventKey={i}
                value={item.id}
                active={cityId === item.id}
            >
                {item.name}
            </MenuItem>
        );

        const currentCity = cities.find(
            item => item.id === cityId
        );

        return (
            <div className="city-select-view">
                <p className="city-select-view__description">Select city</p>

                <DropdownButton
                    bsStyle='default'
                    title={currentCity.name}
                    id='city-select'
                    onSelect={this._onSelect.bind(this)}
                >
                    {citiesMenu}
                </DropdownButton>
            </div>
        );
    }
}

export default CitySelectView;
