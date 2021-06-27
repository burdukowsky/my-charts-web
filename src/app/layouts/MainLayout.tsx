import React from 'react';
import { Router } from '@reach/router';

import { Menu } from 'features/menu/Menu';
import { NotFound } from 'features/not-found/NotFound';
import Main from 'features/main/Main';

const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      <Menu/>
      <Router>
        <Main path='/'/>
        <NotFound default/>
      </Router>
    </React.Fragment>
  );
};

export default MainLayout;
