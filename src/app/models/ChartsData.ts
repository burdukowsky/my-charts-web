export interface DataItem {
  x: number; // time value in milliseconds
  y: number;
}

export interface DataItemWithId extends DataItem {
  id: string;
}

export type ChartsData = Record<string, DataItemWithId[]>;
