import React from 'react';
import { Box, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import Styles from './styles';

function Sidebar() {
  return (
    <Styles.Sidebar
      modal={false}
      onClickOutside={() => null}
      onEsc={() => null}
      plain
      position="top-left"
    >
      <Box fill>
        <Button icon={<FormClose />} />
        <Box fill overflow={{ vertical: 'scroll' }}>
          List
        </Box>
        <Button primary label="Mark all as read" margin="small" />
      </Box>
    </Styles.Sidebar>
  );
}

export default Sidebar;
