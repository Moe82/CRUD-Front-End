import React, { Component } from 'react';
import { HomePageView } from '../views';
import { NavBarView } from '../views'
class HomePageContainer extends Component {
  render() {
      return (
      <div>
        <NavBarView />
        <HomePageView allPlayers={this.props.allPlayers} />
      </div>
      )}
}

export default HomePageContainer;


