import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const LineRefundChart = () => {
  const data = {
    labels: ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM"],
    datasets: [
      {
        data: [10, 20, 22, 15, 20, 15, 20, 19, 14, 15],
        backgroundColor: "transparent",
        borderColor: "#377dff",
        borderWidth: 2,
        pointRadius: 0,
        hoverBorderColor: "#377dff",
        pointBackgroundColor: "#377dff",
        pointBorderColor: "#fff",
        pointHoverRadius: 0,
        tension: 0.4, // Smooth curve
      },
      {
        data: [15, 13, 18, 10, 16, 19, 15, 14, 10, 26],
        backgroundColor: "transparent",
        borderColor: "#e7eaf3",
        borderWidth: 2,
        pointRadius: 0,
        hoverBorderColor: "#e7eaf3",
        pointBackgroundColor: "#e7eaf3",
        pointBorderColor: "#fff",
        pointHoverRadius: 0,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: "#e7eaf3",
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          color: "#97a4af",
          font: {
            size: 12,
            family: "Open Sans, sans-serif",
          },
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#97a4af",
          font: {
            size: 12,
            family: "Open Sans, sans-serif",
          },
          padding: 5,
        },
      },
    },
    plugins: {
        legend: {
            display: false, // Disable the legend
        },
        datalabels: {
            display: false, // Disable data labels
        },
      tooltip: {
        intersect: false,
        mode: "index",
        callbacks: {
          label: (tooltipItem) => tooltipItem.raw, // Displays raw data in tooltip
        },
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  };

  return (
    <div style={{height : '100%', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineRefundChart;