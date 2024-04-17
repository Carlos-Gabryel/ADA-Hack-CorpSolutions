import React from "react";
import { Chart } from "react-google-charts";
import { useGetList } from "../../hooks/use-get-list";

export const Age = () => {
  const { data } = useGetList();
  return (
    <div>
      {data && (
        <Chart
          width={"450px"}
          height={"300px"}
          options={{
            backgroundColor: "transparent",
            colors: ["#f1c40f"],
            hAxis: { title: "Anos" },
            vAxis: { title: "Quantidade" },
            ariaRoleDescription:
              "Gráfico mostrando a idade dos candidatos inscritos nas vagas.",
            ariaLabel:
              "Gráfico de barras com a quantidade de candidatos inscritos por idade.",
          }}
          chartType="ColumnChart"
          data={[
            ["Orientation", "candidatos"],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.idade] = (acc[curr.idade] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
