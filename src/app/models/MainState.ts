import { ChartsData } from './ChartsData';

export interface MainState {
  chartsData: ChartsData;
  currentChart: string | null;
}

export function createMainState(): MainState {
  return { chartsData: {}, currentChart: null };
}
