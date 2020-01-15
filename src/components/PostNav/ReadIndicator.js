import React from 'react';
import { Button } from 'grommet';

const ReadIndicator = ({ isRead, onClick }) => (
  <Button
    plain
    onClick={onClick}
    style={{
      background: isRead ? 'none' : '#5DC8FD',
      width: 11,
      height: 11,
      minWidth: 11,
      minHeight: 11,
      marginRight: 8,
      display: 'inline-block',
      borderRadius: '50%',
      border: '2px solid #5DC8FD',
    }}
  />
);

export default ReadIndicator;
