import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

import { dateFormat, toMillis } from 'app/utils';
import { addDataItem, selectCurrentChart } from 'features/main/mainSlice';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

export const ChartDataNewItemRow: React.FC = () => {
  const { t } = useTranslation('main');
  const currentChart = useAppSelector(selectCurrentChart);
  const [newDate, setNewDate] = useState<string>(DateTime.now().toFormat(dateFormat));
  const [newValue, setNewValue] = useState<number>(0);
  const dispatch = useAppDispatch();

  function onOk(): void {
    dispatch(addDataItem({
      chart: currentChart,
      x: toMillis(newDate),
      y: newValue
    }));

    setNewDate(DateTime.fromFormat(newDate, dateFormat).plus({ day: 1 }).toFormat(dateFormat));
  }

  return (
    <tr>
      <td>
        <input type='date' value={newDate} onChange={e => setNewDate(e.target.value)}/>
      </td>
      <td>
        <input type='number' value={newValue} onChange={e => setNewValue(Number(e.target.value))}/>
      </td>
      <td>
        <button type='button' onClick={onOk} disabled={newDate.length === 0}>{t('ok')}</button>
      </td>
    </tr>
  );
};
