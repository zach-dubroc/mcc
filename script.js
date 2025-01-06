document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("mariahChart").getContext("2d");

  const data = {
    "12/3": ["5:56pm", "6:48pm"],
    "12/10": ["8:42pm"],
    "12/11": ["7:27pm"],
    "12/14": ["4:54pm", "6:08pm", "7:36pm", "9:58pm"],
    "12/17": ["6:40pm", "7:14pm"],
    "12/20": ["8:50pm"],
    "12/21": ["6:42pm", "9:53pm", "11:36pm", "12:10am"],
    "12/27": ["7:04pm"],
    "12/28": ["11:31pm", "11:41pm"],
    "12/31": ["4:05am", "11:07pm"],
  };

  const labels = Object.keys(data);
  const values = Object.values(data).map((times) => times.length);

  const tooltipData = Object.values(data);

  new Chart(ctx, {
    type: "bubble",
    data: {
      labels: labels,
      datasets: [
        {
          label: "bar",
          data: values,
          backgroundColor: "rgb(0, 255, 106)",
          borderColor: "rgb(0, 0, 0)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Count",
          },
        },
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const dateIndex = context.dataIndex;
              const times = tooltipData[dateIndex];
              return `TOES(time of encounter): ${times.join(", ")}`;
            },
          },
        },
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "december 2024",
        },
      },
    },
  });
});
