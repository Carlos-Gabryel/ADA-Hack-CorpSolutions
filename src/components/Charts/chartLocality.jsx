import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
// import lista from '../../db/lista.json';
import { useGetList } from "../../hooks/use-get-list";

export const Locality = () => {
  const { data } = useGetList();

  // Função para criar o gráfico de barras de cidades
  const createCityBarChart = () => {
    const cityCounts = {};

    // Contagem de cidades
    data.forEach((item) => {
      const city = item.cidade;
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    // Formato de dados para o gráfico de barras
    const chartData = [["Estado", "Quantidade"]];
    for (const [city, count] of Object.entries(cityCounts)) {
      chartData.push([city, count]);
    }

    return chartData;
  };

  return (
    <div>
      {data && (
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={createCityBarChart()}
          options={{
            legend: { position: "none" },
            hAxis: { title: "Quantidade" },
            vAxis: { title: "Estado" },
            backgroundColor: "transparent",
            colors: ["#7D3C98"],
          }}
        />
      )}
    </div>
  );
};
