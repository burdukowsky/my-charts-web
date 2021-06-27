import React from 'react';
import { Line } from '@ant-design/charts';
import { DataItem } from 'app/models/ChartsData';

interface LineChartProps {
  data: DataItem[];
}

export const AppLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <Line data={data}
          height={400}
          xField='x'
          yField='y'
          point={{ size: 5, shape: 'square' }}
          xAxis={{
            type: 'time',
            mask: 'D.MM.YYYY',
          }}/>
  );
};
