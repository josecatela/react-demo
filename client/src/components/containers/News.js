import PropTypes from 'prop-types';
import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions/actions';
import NewsItemListing from '../presentation/NewsItemListing';

class News extends Component {
    static get propTypes() {
        return {
            dispatch: PropTypes.func,
            news: PropTypes.arrayOf(PropTypes.shape(NewsItemListing.propTypes)),
        };
    }
    
    componentDidMount() {
        var fakeNews = [{
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe'
        }, {
            id: '2',
            title: 'Owl stowaway',
            teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        }];
        
        this.props.dispatch(fetchNews(fakeNews));
    }

    render() {
        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><NewsItemListing data = {news} /></li> );
        });

        return (
            <div>
                <h2>News Items</h2>
                { this.props.news.length > 0 ? <ul>{newsItems}</ul> : <div>None</div> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(News)
