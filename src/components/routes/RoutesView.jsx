import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer, AllCampusesContainer, SingleCampusContainer, SingleCampusContainerEdit, HomePageContainer  } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component= {HomePageContainer} />
      <Route exact path="/students" component={AllPlayersContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/:id" render={(props) => <SingleCampusContainer {...props} /> }/>
      <Route exact path="/campuses/:id/edit" render={(props) => <SingleCampusContainerEdit {...props} /> } />
    </Switch>
  )
}

export default RoutesView;
