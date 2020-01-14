import React, { useState, useEffect } from 'react';
import { Grommet, Main } from 'grommet';

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
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetch('https://www.reddit.com/top.json')
        .then(res => res.json())
        .then(res => res.data.children);
      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <Grommet theme={theme}>
      <Sidebar posts={posts} />
      <Main>
        <PostMain />
        <PostPreview />
      </Main>
    </Grommet>
  );
}

export default App;
