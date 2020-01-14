import React, { useEffect } from 'react';
import { Grommet } from 'grommet';

import Sidebar from './components/Sidebar';
import PostMain from './components/PostMain';
import PostPreview from './components/PostPreview';

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
  useEffect(() => {
    const fetchData = async () => {
      return await fetch('https://www.reddit.com/top.json')
        .then(res => res.json())
        .then(res => res.data);
    };

    fetchData();
  }, []);

  return (
    <Grommet theme={theme}>
      <Sidebar />
      <PostMain />
      <PostPreview />
    </Grommet>
  );
}

export default App;
