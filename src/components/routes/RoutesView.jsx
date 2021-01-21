import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import { AllCampusesContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/students" component={AllPlayersContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
    </Switch>
  )
}

export default RoutesView;
