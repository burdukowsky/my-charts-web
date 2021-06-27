import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from './nav-link/NavLink';
import useAuth from 'app/hooks/useAuth';
import { LangSelector } from 'app/components/lang-selector/LangSelector';

export const Menu: React.FC = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  function signOut(): void {
    auth.signOut();
  }

  return (
    <nav>
      {/* <NavLink to='/'>{t('home')}</NavLink>*/}
      {/* <NavLink to='demo'>{t('dashboard')}</NavLink>*/}
      <LangSelector/>
      <button type='button' onClick={signOut}>{t('signOut')}</button>
    </nav>
  );

};
