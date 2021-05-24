import React from 'react';
import { Router } from '@reach/router';

import { Menu } from 'features/menu/Menu';
import { Home } from 'features/home/Home';
import { Demo } from 'features/demo/Demo';
import { NotFound } from 'features/not-found/NotFound';

export const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      <Menu />
      <Router>
        <Home path='/' />
        <Demo path='demo' />
        <NotFound default />
      </Router>
    </React.Fragment>
  );
};
