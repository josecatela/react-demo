import PropTypes from 'prop-types';
import React, { Component} from 'react';
import { connect } from 'react-redux'

import NewsItemDetail from '../presentation/NewsItemDetail';
import { fetchNewsItem } from '../../actions/newsActions';

class NewsArticle extends Component {

    componentDidMount(){
        this.props.dispatch(fetchNewsItem(this.props.match.params.id));
    }

    render(){
        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    { !this.props.newsItemLoading ? <NewsItemDetail data={this.props.newsItem} /> : <div>Loading</div> }
                </ul>
            </div>
        );
    }
}

NewsArticle.propTypes = {
    dispatch: PropTypes.func.isRequired,
    newsItem: PropTypes.shape(NewsItemDetail.propTypes).isRequired,
    newsItemLoading: PropTypes.bool.isRequired,
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem,
        newsItemLoading: state.news.newsItemLoading,
    };
}

export default connect(mapStateToProps)(NewsArticle)
