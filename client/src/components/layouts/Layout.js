import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import logo from '../../logo.svg';

class Layout extends Component {

    render() {
        return (
            <div className='Layout'>
                <h1>glassowl.io - shattering news about transparent owls</h1>
                <nav>
                    <Link to={'/'}>Home</Link> |
                    <Link to={'/about'}>About</Link>
                </nav>
                <div>
                    { this.props.children }
                </div>
                <img src={logo} alt='React Logo' className='App-logo' />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Layout;
