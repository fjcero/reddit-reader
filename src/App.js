import React from 'react';
import { Grommet } from 'grommet';

import Sidebar from './components/Sidebar';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const fetchData = () => {
  return fetch('https://www.reddit.com/top.json')
    .then(res => {
      return res.json();
    })
    .then(res => res.data);
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Sidebar /> */}
    </Grommet>
  );
}

export default App;
