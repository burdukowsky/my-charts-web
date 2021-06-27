import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/reduxHooks';
import { selectChartsData, selectCurrentChart } from '../mainSlice';
import { ChartDataRow } from './chart-data-row/ChartDataRow';
import { ChartDataNewItemRow } from './chart-data-new-item-row/ChartDataNewItemRow';

export const ChartData: React.FC = () => {
  const { t } = useTranslation('main');
  const chartsData = useAppSelector(selectChartsData);
  const currentChart = useAppSelector(selectCurrentChart);

  function getTBody(): ReactNode {
    if (currentChart == null) {
      return null;
    }
    return chartsData[currentChart].map((item, index) => (
      <ChartDataRow key={item.id} item={item} index={index}/>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{t('date')}</th>
          <th colSpan={2}>{t('value')}</th>
        </tr>
      </thead>
      <tbody>
        {getTBody()}
        <ChartDataNewItemRow/>
      </tbody>
    </table>
  );
};
