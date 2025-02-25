import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from "chart.js";

// Register required Chart.js modules
ChartJS.register(LineElement, PointElement, LinearScale, Tooltip, CategoryScale);

const LineChartUser = () => {
    const data = {
        labels: [
            "1 May", "2 May", "3 May", "4 May", "5 May", "6 May", "7 May", "8 May",
            "9 May", "10 May", "11 May", "12 May", "13 May", "14 May", "15 May",
            "16 May", "17 May", "18 May", "19 May", "20 May", "21 May", "22 May",
            "23 May", "24 May", "25 May", "26 May", "27 May", "28 May", "29 May",
            "30 May", "31 May",
        ],
        datasets: [
            {
                data: [21, 20, 24, 20, 18, 17, 15, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90, 90, 85, 70, 75, 70, 30, 30, 30, 50, 72],
                borderColor: "#377dff",
                borderWidth: 2,
                backgroundColor: "rgba(55, 125, 255, 0)",
                pointRadius: 0, // Keeps points visually small
                pointHitRadius: 10, // Extends hover area around points
                pointHoverRadius: 5, // Slightly enlarges point on hover
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: false, // Disable data labels
            },
            tooltip: {
                enabled: true,
                position: "nearest",  // Use "nearest" as the default position
                callbacks: {
                    label: function (context) {
                        return `${context.raw}k`;  // Display value with "k" postfix
                    },
                },
            },
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
    };
    
    return (
        <div className="dashboard-charts" style={{ height: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChartUser;
