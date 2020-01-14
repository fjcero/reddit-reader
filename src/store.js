import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducers from './reducers';

const persistConfig = {
  key: 'reddit-reader',
  storage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
