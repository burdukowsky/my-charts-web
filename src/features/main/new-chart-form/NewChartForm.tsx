import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { addChart } from '../mainSlice';
import { useAppDispatch } from 'app/reduxHooks';

export const NewChartForm: React.FC = () => {
  const { t } = useTranslation('main');
  const dispatch = useAppDispatch();
  const [newChart, setNewChart] = useState<string>('');

  function onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();
    dispatch(addChart(newChart));
    setNewChart('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        {t('addChart')} <br/>
        <input type='text' value={newChart} onChange={e => setNewChart(e.target.value)}/>
      </label>
      <button type='submit' disabled={newChart.trim().length === 0}>{t('ok')}</button>
    </form>
  );
};
