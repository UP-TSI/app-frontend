import { ResponsivePie } from "@nivo/pie";
import React, { useEffect, useState } from 'react';
import axios from "axios";

// Definição do formato do objeto "Produto"
interface Produto {
  id: number;
  nome: string;
  valorAlocado: number;
}

// Componente do gráfico de barras
const PieChart: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]); // Estado "produtos" que inicialmente armazena uma lista de objetos "Produto" vazia

  // Fazemos uma requisição GET na rota abaixo
  useEffect(() => {
    axios.get('https://dev.ipesistemas.com.br/api/products/statistics/?graphType=allocatedValue')
        .then(response => {
            setProdutos(response.data); // Se a requisição for bem sucedida, o estado "Produto" é atualizado, e os dados são retornados no gráfico
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error); // Se a requisição for má sucedida, um erro é retornado no console
        }); 
  }, []);

  // Conjunto de dados gerado para mapear os produtos de acordo com o formato do gráfico de pizza
  const valorAlocadoData = produtos.map(produto => ({
    id: produto.nome,
    label: produto.nome,
    value: produto.valorAlocado,
  }));

  // No final, retornamos a páginação do gráfico
  return (
    <div>
      <span className="font-bold text-4xl">Maior valor alocado por produto</span>
      <ResponsivePie
        data={valorAlocadoData}
        valueFormat={(value) =>
          new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            maximumFractionDigits: 2,
          }).format(value)
        }
        colors={{ scheme: 'blues' }}
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
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
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