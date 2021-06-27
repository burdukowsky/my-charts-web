import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import useAuth from 'app/hooks/useAuth';

export const Login: React.FC<RouteComponentProps> = () => {

  const auth = useAuth();
  const { t } = useTranslation();
  const [user, setUser] = useState<string>('');

  function authorize(event: React.SyntheticEvent): void {
    event.preventDefault();
    auth.signIn(user);
  }

  return (
    <form onSubmit={authorize}>
      <input type='text' onChange={event => setUser(event.target.value)}/>
      <button type='submit'>{t('signIn')}</button>
    </form>
  );

};
