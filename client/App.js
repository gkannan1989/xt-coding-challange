import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Provider>
    );
  }
}

export default App;
