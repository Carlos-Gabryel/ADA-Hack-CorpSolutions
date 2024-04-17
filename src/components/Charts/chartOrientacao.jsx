import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';

export const Orientation = () => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
        width={'450px'}
        height={'300px'}
          options={{
            backgroundColor: 'transparent',
            colors: ['#f1c40f'],
            ariaRoleDescription:"Gráfico mostrando a orientação sexual dos candidatos inscritos nas vagas.",
            ariaLabel:"Gráfico de barras com a quantidade de candidatos inscritos por orientação sexual."
          }}
          chartType="ColumnChart"
          data={[
            ['Orientation', 'candidatos'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.orientacaoSexual] = (acc[curr.orientacaoSexual] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
