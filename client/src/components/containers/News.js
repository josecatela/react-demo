import PropTypes from 'prop-types';
import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions/newsActions';
import NewsItemListing from '../presentation/NewsItemListing';

class News extends Component {
    componentDidMount() {
        this.props.dispatch(fetchNews());
    }

    render() {
        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><NewsItemListing data = {news} /></li> );
        });

        return (
            <div className='News'>
                <h2>News Items</h2>
                { this.props.news.length > 0 ? <ul>{newsItems}</ul> : <div>None</div> }
            </div>
        )
    }
}

News.propTypes = {
    dispatch: PropTypes.func,
    news: PropTypes.arrayOf(PropTypes.shape(NewsItemListing.propTypes)),
};

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(News)
