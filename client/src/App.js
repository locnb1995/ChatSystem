import React from 'react';
import MainComponent from './component/MainComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

function App() {
  const store = createStore(rootReducer);
  return(
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default App;
