import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import useAuth from 'app/hooks/useAuth';
import { useAppDispatch } from 'app/reduxHooks';
import { setMainState } from '../main/mainSlice';
import { localStorageService } from 'app/services/LocalStorageService';

export const Login: React.FC<RouteComponentProps> = () => {

  const auth = useAuth();
  const { t } = useTranslation();
  const [user, setUser] = useState<string>('');
  const dispatch = useAppDispatch();

  function authorize(event: React.SyntheticEvent): void {
    event.preventDefault();
    if (invalid()) {
      return;
    }
    dispatch(setMainState(localStorageService.getMainStateByUser(user)));
    auth.signIn(user);
  }

  function invalid(): boolean {
    return user.trim().length === 0;
  }

  return (
    <form onSubmit={authorize}>
      <input type='text' onChange={event => setUser(event.target.value)}/>
      <button type='submit' disabled={invalid()}>{t('signIn')}</button>
    </form>
  );

};
