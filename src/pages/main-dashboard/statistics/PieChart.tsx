import { ResponsivePie } from "@nivo/pie";
import React, { useEffect, useState } from 'react';
import axios from "axios";

interface Produto {
  id: number;
  nome: string;
  valorAlocado: number;
}

const PieChart: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/produtos')
        .then(response => {
            setProdutos(response.data.slice(0, 5));
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
  }, []);

  const valorAlocadoData = produtos.map(produto => ({
    id: produto.nome,
    label: produto.nome,
    value: produto.valorAlocado,
  }));

  return (
    <div>
      <span className="font-bold text-4xl">Maior valor alocado por produto</span>
      <ResponsivePie
        data={valorAlocadoData}
        margin={{ top: 40, right: 80, bottom: 80, left: -40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </div>
  );
};

export default PieChart;