import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from 'react';
import axios from "axios";

// Definição do formato do objeto "Produto"
interface Produto {
  id: number;
  nome: string;
  lucroPotencial: number;
}

// Componente do gráfico de barras
const BarChart: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]); // Estado "produtos" que inicialmente armazena uma lista de objetos "Produto" vazia

  // Fazemos uma requisição GET na rota abaixo
  useEffect(() => {
    axios.get('http://localhost:3000/api/produtos') // Essa rota será substituída
        .then(response => {
          setProdutos(response.data.slice(0, 5)); // Se a requisição for bem sucedida, o estado "Produto" é atualizado, e os dados são retornados no gráfico
        })
        .catch(error => {
          console.error('Erro ao buscar produtos:', error); // Se a requisição for má sucedida, um erro é retornado no console
        });
  }, []);

  // Conjunto de dados gerado para mapear os produtos de acordo com o formato do gráfico de barras
  const lucroPotencialData = produtos.map(produto => ({
    nome: produto.nome,
    lucroPotencial: produto.lucroPotencial,
  }));
  
  // No final, retornamos a páginação do gráfico
  return (
      <div>
        <span className="font-bold text-4xl">Maior lucratividade potencial</span>
        <ResponsiveBar
          data={lucroPotencialData}
          keys={['lucroPotencial']}
          indexBy="nome"
          margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "produtos",
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Lucro Potencial (R$)",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
    </div>
  );
};

export default BarChart;