import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: '250px' }}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="REQUISITOS" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="TESTES GERADOS" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="ALTERAÇÕES" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
