import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { ChartsData, DataItem } from 'app/models/ChartsData';
import { genRandomId } from 'app/utils';
import { localStorageService } from 'app/services/LocalStorageService';
import { createMainState, MainState } from 'app/models/MainState';

const lsMainState = localStorageService.getMainState();
const initialState = lsMainState ? lsMainState : createMainState();

const name = 'main';

type AddDataItemAction = DataItem & { chart: string };

interface DeleteDataItemAction {
  chart: string;
  index: number;
}

type UpdateDataItemAction = DataItem & DeleteDataItemAction;

const slice = createSlice<MainState, SliceCaseReducers<MainState>>({
  name,
  initialState,
  reducers: {
    addChart(state, action: PayloadAction<string>) {
      state.chartsData[action.payload] = [];
      state.currentChart = action.payload;
    },
    setCurrentChart(state, action: PayloadAction<string>) {
      state.currentChart = action.payload;
    },
    addDataItem(state, action: PayloadAction<AddDataItemAction>) {
      const { chart, x, y } = action.payload;
      state.chartsData[chart].push({ id: genRandomId(), x, y });
    },
    deleteDataItem(state, action: PayloadAction<DeleteDataItemAction>) {
      const { chart, index } = action.payload;
      state.chartsData[chart].splice(index, 1);
    },
    updateDataItem(state, action: PayloadAction<UpdateDataItemAction>) {
      const { chart, index, x, y } = action.payload;
      state.chartsData[chart][index].x = x;
      state.chartsData[chart][index].y = y;
    },
    setMainState(state, action: PayloadAction<MainState>) {
      const { chartsData, currentChart } = action.payload;
      state.chartsData = chartsData;
      state.currentChart = currentChart;
    }
  }
});

export const { addChart, setCurrentChart, addDataItem, deleteDataItem, updateDataItem, setMainState } = slice.actions;

export const selectChartsData = (state: RootState): ChartsData => state.main.chartsData;
export const selectCurrentChart = (state: RootState): string | null => state.main.currentChart;

export default slice.reducer;
