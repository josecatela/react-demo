import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Layout extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>glassowl.io - shattering news about transparent owls</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Layout;
