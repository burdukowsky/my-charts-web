import React, { useState } from 'react';

import { DataItem } from 'app/models/ChartsData';
import { deleteDataItem, selectCurrentChart, updateDataItem } from 'features/main/mainSlice';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';
import { formatMillis, toMillis } from 'app/utils';

interface ChartDataRowProps {
  item: DataItem;
  index: number;
}

export const ChartDataRow: React.FC<ChartDataRowProps> = ({ item, index }) => {
  const currentChart = useAppSelector(selectCurrentChart);
  const dispatch = useAppDispatch();
  const [date, setDate] = useState<string>(formatMillis(item.x));
  const [value, setValue] = useState<number>(item.y);

  function onDelete(): void {
    dispatch(deleteDataItem({ chart: currentChart, index }));
  }

  function onSave(): void {
    dispatch(updateDataItem({
      chart: currentChart,
      index,
      x: toMillis(date),
      y: value,
    }));
  }

  return (
    <tr>
      <td>
        <input type='date' value={date} onChange={e => setDate(e.target.value)}/>
      </td>
      <td>
        <input type='number' value={value} onChange={e => setValue(Number(e.target.value))}/>
      </td>
      <td>
        <button type='button' onClick={onSave} disabled={date.length === 0}>✓</button>
        <button type='button' onClick={onDelete}>✖</button>
      </td>
    </tr>
  );
};
