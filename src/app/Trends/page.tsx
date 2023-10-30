"use client";

import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function page() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const data = {
      labels: ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"],

      datasets: [
        {
          label: "My First dataset",
          borderColor: documentStyle.getPropertyValue("--bluegray-400"),
          pointBackgroundColor:
            documentStyle.getPropertyValue("--bluegray-400"),
          pointBorderColor: documentStyle.getPropertyValue("--bluegray-400"),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue("--bluegray-400"),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          borderColor: documentStyle.getPropertyValue("--pink-400"),
          pointBackgroundColor: documentStyle.getPropertyValue("--pink-400"),
          pointBorderColor: documentStyle.getPropertyValue("--pink-400"),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue("--pink-400"),
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-center bg-white">
      <Chart
        type="radar"
        data={chartData}
        options={chartOptions}
        className="w-full max-w-3xl"
      />
    </div>
  );
}
