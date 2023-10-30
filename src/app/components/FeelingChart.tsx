
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function FeelingChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex flex-col justify-content-center bg-gradient-to-br rounded-lg p-2 from-gray-400 via-sky-700 to-blue-900  text-white">
            <h2 className=" text-xl font-semibold text-white p-2">
            World's Feeling Today
          </h2>
            <Chart type="polarArea" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}