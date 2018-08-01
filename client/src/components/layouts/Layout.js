import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import logo from '../../logo.svg';

class Layout extends Component {

    render() {
        // TODO: Move nav to component with user awareness
        return (
            <div className='Layout'>
                <h1>glassowl.io - shattering news about transparent owls</h1>
                <nav>
                    <Link to={'/'}>Home</Link><span>|</span>
                    <Link to={'/about'}>About</Link><span>|</span>
                    <Link to={'/submit'}>Post</Link><span>|</span>
                    <Link to={'/user'}>Members</Link>
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
