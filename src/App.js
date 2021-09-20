
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Asosiy from './components/MenuSection/Asosiy';
import CollectorMenu from './components/MenuSection/CollectorMenu';
import NotFound from './components/MenuSection/NotFound';


function App() {
  return (
    <React.Fragment>
      <CollectorMenu />
      <div className="content">
        <Switch>
          <Route exact path="/asosiy" component={Asosiy} />
          <Route exact path="/" component={Asosiy} />
          <Route path="/kurs" />
          <Route path="/raspi" />
          <Route path="/prepo" />
          <Route path="/ras" />
          <Route path="/not-found" component={NotFound} />
          <Route path="kontact" />
          <Route path="kabinet" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
