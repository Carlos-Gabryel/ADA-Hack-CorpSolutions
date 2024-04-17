import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useGetList } from "../../hooks/use-get-list";

export const Total = () => {
  const { data } = useGetList();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const chartDataFormatted = data.map((item) => [item.gender, item.count]);
      setChartData(chartDataFormatted);
    } else {
      setChartData([]);
    }
  }, [data]);

  return (
    <div>
      {data && (
        <Chart
          width={"450px"}
          height={"300px"}
          options={{
            backgroundColor: "transparent",
            colors: ["#0072BD", "#FFA500", "#8E44AD"],
            ariaRoleDescription:"Gráfico mostrando o total de vagas disponíveis, vagas preenchidas e candidatos inscritos nas vagas.",
            ariaLabel:"Gráfico de pizza com o total de vagas disponíveis, vagas preenchidas e candidatos inscritos nas vagas."
          }}
          chartType="PieChart"
          data={[
            ["Gender", "Count"],
            ["Vagas disponiveís", 4],
            ["Vagas preenchidas", 20],
            ["Candidatos", chartData.length],
          ]}
        />
      )}
    </div>
  );
};
