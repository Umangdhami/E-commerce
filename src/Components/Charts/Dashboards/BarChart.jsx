import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Registering necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10"],
    datasets: [
      {
        // label: 'New',
        data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
        backgroundColor: "#377dff",
        hoverBackgroundColor: "#377dff",
        borderColor: "#377dff",
        maxBarThickness: 10,
      },
      {
        // label: 'Overdue',
        data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
        backgroundColor: "#e7eaf3",
        borderColor: "#e7eaf3",
        maxBarThickness: 10,
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
          zeroLineColor: "#e7eaf3",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          fontSize: 12,
          fontColor: "#97a4af",
          fontFamily: "Open Sans, sans-serif",
          padding: 10,
          callback: function (value) {
            return "$" + value; // Format ticks as currency
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          fontSize: 12,
          fontColor: "#97a4af",
          fontFamily: "Open Sans, sans-serif",
          padding: 5,
        },
        categoryPercentage: 1, // Set this to 1 to reduce space between bars
        barPercentage: 1,      // Set this to 1 to remove gap between bars
        maxBarThickness: 10,
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
        callbacks: {
          title: function (tooltipItem) {
            const label = tooltipItem[0].label;
            const year = new Date().getFullYear();
            const date = new Date(`${label} ${year}`);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options); // e.g., "May 25, 2025"
          },
          label: function (context) {
            return "$" + context.raw; // Format tooltip label as currency
          },
        },
        mode: "index",
        intersect: false,
        hasIndicator: true,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    cornerRadius: 2,
  };

  return (
    <div style={{ height: "20rem", width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
