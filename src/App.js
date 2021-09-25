
import React from 'react';
import { Route, Switch } from 'react-router';
import Asosiy from './components/MenuSection/Asosiy';
import CollectorMenu from './components/MenuSection/CollectorMenu';


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
          <Route path="kontact" />
          <Route path="kabinet" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
