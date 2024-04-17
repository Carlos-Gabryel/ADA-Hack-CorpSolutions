import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';


export const Etnia = () => {
  const { data } = useGetList();
  return (
    <div>
      {data && (
        <Chart
          width={'450px'}
          height={'300px'}
          chartType="PieChart"
          options={{
            colors: ['#88C878', '#FFB7A5', '#B1A0C7', '#FFF2AE'],
            ariaRoleDescription:"Gráfico mostrando a etnia dos candidatos inscritos nas vagas.",
            ariaLabel:"Gráfico de pizza com a quantidade de candidatos inscritos por etnia."
          }}
          data={[
            ['Etnia', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.etnia] = (acc[curr.etnia] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
