import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

import { AppLineChart } from 'app/components/app-line-chart/AppLineChart';
import { ChartList } from './chart-list/ChartList';
import styles from './Main.module.scss';
import { ChartData } from './chart-data/ChartData';
import { NewChartForm } from './new-chart-form/NewChartForm';
import { useAppSelector } from 'app/reduxHooks';
import { selectChartsData, selectCurrentChart } from './mainSlice';
import { localStorageService } from 'app/services/LocalStorageService';

const Main: React.FC<RouteComponentProps> = () => {
  const chartsData = useAppSelector(selectChartsData);
  const currentChart = useAppSelector(selectCurrentChart);

  useEffect(() => {
    localStorageService.setMainState({ chartsData, currentChart });
  }, [chartsData, currentChart]);

  return (
    <div className={styles.container}>
      <div className={styles.chartList}>
        <ChartList/>
        <NewChartForm/>
      </div>
      {
        currentChart && (
          <>
            <div className={styles.chart}>
              <AppLineChart data={chartsData[currentChart]}/>
            </div>
            <div className={styles.data}>
              <ChartData/>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Main;
