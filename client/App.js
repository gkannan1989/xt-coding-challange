import React, { useContext, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import { usePersistedContext, usePersistedReducer } from './store/usePersist';
import Store from './store/context';
import reducer from './store/reducer';
import routes from './routes/config';

function App() {
  const globalStore = usePersistedContext(useContext(Store), 'state');
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state',
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Store.Provider>
  );
}

export default App;
