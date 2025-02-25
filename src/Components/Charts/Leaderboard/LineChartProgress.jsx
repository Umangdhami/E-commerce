import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartProgress = () => {
    const data = {
        labels: ["value", "value", "value", "value", "value", "value", "value"],
        datasets: [
            {
                data: [4, 20, 24, 25, 25, 25, 26],
                backgroundColor: 'transparent',
                borderColor: '#377dff',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0,
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
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
                enabled: false
            }
        }
    };

    return (
        <div style={{height: '100%', width: '100%' }}>
          <Line data={data} options={options} />
        </div>
      );
};

export default LineChartProgress;
