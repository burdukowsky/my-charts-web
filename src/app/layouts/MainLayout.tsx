import React from 'react';
import { Router } from '@reach/router';

import { Menu } from 'features/menu/Menu';
import { NotFound } from 'features/not-found/NotFound';

const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      <Menu />
      <Router>
        {/* <Home path='/' />*/}
        {/* <Demo path='demo' />*/}
        <NotFound default />
      </Router>
    </React.Fragment>
  );
};

export default MainLayout;
