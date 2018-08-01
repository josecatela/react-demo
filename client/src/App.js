import { Provider } from 'react-redux';
import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import NewsArticle from './components/containers/NewsArticle';
import NewsSubmit from './components/containers/NewsSubmit';
import About from './components/layouts/About';
import Home from './components/layouts/Home';
import Layout from './components/layouts/Layout';
import store from './stores/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/news/:id" component={NewsArticle} />
                        <Route path='/submit' component={NewsSubmit}/>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
