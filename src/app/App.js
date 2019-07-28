import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TrackListing from '../containers/TrackListing';
import AddTrack from '../containers/AddTrack';

const App = props => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={TrackListing} />
          <Route path="/addTrack" exact component={AddTrack} />
          <Redirect path="/home" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
