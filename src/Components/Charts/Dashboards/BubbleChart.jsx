import React from "react";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, BubbleController } from "chart.js";
import { Bubble } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required Chart.js components and the datalabels plugin
ChartJS.register(BubbleController, LinearScale, PointElement, Tooltip, ChartDataLabels);

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        data: [{ x: 50, y: 65, r: 99, label: '10' }],
        backgroundColor: "rgba(55, 125, 255, 0.9)",
        borderColor: "transparent",
      },
      {
        data: [{ x: 46, y: 42, r: 65, label: '20' }],
        backgroundColor: "rgba(100, 0, 214, 0.8)",
        borderColor: "transparent",
      },
      {
        data: [{ x: 48, y: 15, r: 38, label: '30' }],
        backgroundColor: "#00c9db",
        borderColor: "transparent",
      },
      {
        data: [{ x: 55, y: 2, r: 61, label: '40' }],
        backgroundColor: "#4338ca",
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "linear",
        grid: { display: false, drawBorder: false }, 
        ticks: { display: false, max: 100, beginAtZero: true },
        border: { display: false }, 
      },
      x: {
        type: "linear",
        grid: { display: false, drawBorder: false },
        ticks: { display: false, max: 100, beginAtZero: true },
        border: { display: false },
      },
    },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        display: true,
        color: 'white', // Text color
        align: 'center', // Center the text
        font: {
          weight: 'bold',
          size: 18, // Adjust size as needed
        },
        formatter: (value) => {
          return value.label; // Access the custom label from the data
        },
      },
    },
    elements: {
      point: {
        borderWidth: 0, 
      },
    },
  };

  return (
    <div className="bubble-chart-dashboard" style={{ width: '100%', height: '300px', border: 'none', padding: 0 }}>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
