import React from 'react';
import { useSelector } from 'react-redux';
import { Grommet } from 'grommet';
import RedditReader from '../RedditReader';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#FD6EC0',
      focus: '#FD6EC0',
    },
  },
};

function App() {
  const sidebar = useSelector(store => store.app.sidebar);

  return (
    <Grommet theme={theme}>
      <RedditReader showSidebar={sidebar} />
    </Grommet>
  );
}

export default App;
