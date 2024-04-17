import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';

export const Gender = () => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
        width={'450px'}
        height={'300px'}
          options={{
            backgroundColor: 'transparent',
            pieHole: 0.4,
            colors: ['#2E86C1', '#F4D03F', '#E74C3C', '#16A085', '#7D3C98', '#F39C12',  '#AED6F1','#D35400', '#88C878', '#FFB7A5', '#B1A0C7', '#FFF2AE' , '#FFDDA8', '#D7BDE2', '#F9E79F'],
            ariaRoleDescription:"Gráfico mostrando o genero dos candidatos inscritos nas vagas.",
            ariaLabel:"Gráfico de pizza com a quantidade de candidatos inscritos por genero."
          }}
          chartType="PieChart"
          data={[
            ['Gender', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.genero] = (acc[curr.genero] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
