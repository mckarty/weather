import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './country-select-view.css';

import {DropdownButton, MenuItem} from 'react-bootstrap';

class CountrySelectView extends Component {
    static propTypes = {
        countries: PropTypes.array.isRequired,
        countryCode: PropTypes.string.isRequired,
        onCountrySelect: PropTypes.func.isRequired
    };

    _onSelect(i) {
        const newCountryCode = this.props.countries[i].code;

        this.props.onCountrySelect(newCountryCode);
    }

    render() {
        const props = this.props;
        const countries = props.countries;
        const countryCode = props.countryCode;

        const countriesMenu = countries.map((item, i) =>
            <MenuItem
                key={i}
                eventKey={i}
                value={item.code}
                active={countryCode === item.code}
            >
                {item.name}
            </MenuItem>
        );

        const currentCountry = countries.find(
            item => item.code === countryCode
        );

        return (
            <div className="country-select-view">
                <p className="country-select-view__description">Select country</p>

                <DropdownButton
                    bsStyle='default'
                    title={currentCountry.name}
                    id='country-select'
                    onSelect={this._onSelect.bind(this)}
                >
                    {countriesMenu}
                </DropdownButton>
            </div>
        );
    }
}

export default CountrySelectView;
