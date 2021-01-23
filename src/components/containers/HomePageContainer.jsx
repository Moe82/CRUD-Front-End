import React, { Component } from 'react';
import { HomePageView } from '../views';

class HomePageContainer extends Component {
  render() {
      return <HomePageView allPlayers={this.props.allPlayers} />
  }
}

export default HomePageContainer;


