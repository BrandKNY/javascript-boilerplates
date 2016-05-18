import React from 'react';

import {
  IndexRoute,
  IndexRedirect,
  Route,
} from 'react-router';

export default (store) => (
  <Route path="/" component={App}>
    <IndexRedirect to="/login" />
    <Route path="login" component={LoginPage} />
    <Route path="private" onEnter={(state, transition, callback) => verifyAuthentication(store, transition, callback)}>
    </Route>
  </Route>
);

function verifyAuthentication(store, transition, callback){
  Promise.resolve()
    .then(() => callback());
}
