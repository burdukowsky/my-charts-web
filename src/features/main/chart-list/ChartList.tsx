import React from 'react';
import classNames from 'classnames';

import styles from './ChartList.module.scss';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';
import { selectChartsData, selectCurrentChart, setCurrentChart } from '../mainSlice';

export const ChartList: React.FC = () => {
  const chartsData = useAppSelector(selectChartsData);
  const currentChart = useAppSelector(selectCurrentChart);
  const dispatch = useAppDispatch();

  function getChartClassName(chart: string): any {
    return classNames({
      [styles.item]: true,
      [styles.itemActive]: currentChart === chart,
    });
  }

  return (
    <ul className={styles.list}>
      {Object.keys(chartsData).map((chart, i) => (
        <ul key={i}>
          <button type='button'
                  className={getChartClassName(chart)}
                  onClick={() => dispatch(setCurrentChart(chart))}>
            {chart}
          </button>
        </ul>
      ))}
    </ul>
  );
};
