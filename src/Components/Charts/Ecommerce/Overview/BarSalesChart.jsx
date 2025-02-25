import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarSalesChart = () => {
  const data = {
    labels: ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM"],
    datasets: [
      {
        data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 225],
        backgroundColor: "#377dff",
        hoverBackgroundColor: "#377dff",
        borderColor: "#377dff",
        maxBarThickness: 10
      },
      {
        data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120, 150, 230, 382, 204, 169, 290, 300, 100, 300, 140],
        backgroundColor: "#e7eaf3",
        borderColor: "#e7eaf3",
        maxBarThickness: 10
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: "#e7eaf3",
          drawBorder: false,
          zeroLineColor: "#e7eaf3"
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          color: "#97a4af",
          font: {
            size: 12,
            family: "Open Sans, sans-serif"
          },
          padding: 10
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: "#97a4af",
          font: {
            size: 12,
            family: "Open Sans, sans-serif"
          },
          padding: 5
        },
        categoryPercentage: 0.5,
        maxBarThickness: 10
      }
    },
    plugins: {
        legend: {
            display: false, // Disable the legend
        },
        datalabels: {
            display: false, // Disable data labels
        },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    hover: {
      mode: "nearest",
      intersect: true
    }
  };

  return (
    <div style={{height : '100%', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarSalesChart;