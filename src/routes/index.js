import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Tutor from 'pages/Tutor';

const Routes = () => {
  const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutor" exact component={Tutor} />
        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};
export default Routes;
