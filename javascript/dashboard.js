const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#00b533",
      borderColor: "#00b533",
      data: [0, 10, 5, 2, 20, 30, 45, 50, 55, 40, 35, 30],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById("myChart"), config);
