import React from 'react';
import { Image } from 'grommet';

const Thumbnail = ({ post }) => {
  return <Image src={post.thumbnail} a11yTitle={post.title} />;
};

export default Thumbnail;
