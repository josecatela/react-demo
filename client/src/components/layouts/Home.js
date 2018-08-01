import React, {Component} from 'react';
import News from '../containers/News';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to glassowl.io</h3>
                <News />
            </div>
        );
    }
}

export default Home;
