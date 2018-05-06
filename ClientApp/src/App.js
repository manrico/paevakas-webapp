import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Promotion } from './components/Promotion';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/promotion' component={Promotion} />
      </Layout>
    );
  }
}
