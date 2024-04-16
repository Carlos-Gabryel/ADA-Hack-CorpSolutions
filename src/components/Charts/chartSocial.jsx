import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export const Social = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://corpsolutions.free.beeceptor.com/listacandidatos');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
