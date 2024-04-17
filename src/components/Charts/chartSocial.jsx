import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';

export const Social = () => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          data={[
            ['Social', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.historicoSocioeconomico] = (acc[curr.historicoSocioeconomico] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
          options={{
            title: "Histórico socioeconômico",
          }}
        />
      )}
    </div>
  );
};
