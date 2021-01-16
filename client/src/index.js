import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider domain={"shiny-field-3546.us.auth0.com"} clientId={"OhknRwdeHFcewtKTe0U6xFfFzuQnwjas"} redirectUri={window.location.origin}>
  <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);


