import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import { AllCampusesContainer } from '../containers';
import { SingleCampusContainer } from '../containers';
import { SingleCampusContainerEdit } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/students" component={AllPlayersContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/:id" render={(props) => <SingleCampusContainer {...props} /> }/>
      <Route exact path="/campuses/:id/edit" render={(props) => <SingleCampusContainerEdit {...props} /> } />
    </Switch>
  )
}

export default RoutesView;
