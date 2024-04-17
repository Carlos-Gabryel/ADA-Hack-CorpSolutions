import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';

export const ColumnChart = ({hTitle, vTitle, colorsList, type}) => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
        width={'450px'}
        height={'300px'}
          options={{
            backgroundColor: 'transparent',
            colors: colorsList,
            hAxis: { title: hTitle },
            vAxis: { title: vTitle },
          }}
          chartType="ColumnChart"
          data={[
            ['Orientation', 'candidatos'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.type] = (acc[curr.type] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
