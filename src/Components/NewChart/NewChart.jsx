import { CChart } from "@coreui/react-chartjs";
import "./NewChart.css";
export default function NewChart({ chartType, chartData, chartKey }) {
  if (chartType === "line") {
    return (
      <>
        <div class="px-1 overflow-hidden mb-2" style={{ zIndex: "2" }}>
          <div className="w-100 h-75 overflow-auto">
            <CChart
              type={chartType}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "chart",
                    fill: false,
                    borderColor: "#fff",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              options={{
                responsive: true,
                // layout: {
                //   autoPadding: true,
                //   padding: "3px",
                // },
                animations: {
                  tension: {
                    duration: 1000,
                    easing: "linear",
                    from: 1,
                    to: 0,
                    loop: true,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                  scales: {
                    x: {
                      grid: {
                        color: "#fff",
                      },
                      ticks: {
                        color: "#fff",
                      },
                    },
                    y: {
                      grid: {
                        color: "#fff",
                      },
                      ticks: {
                        color: "#fff",
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </>
    );
  } else if ((chartType = "bar")) {
    return (
      <div className="px-1 overflow-hidden">
        <div className="w-100 h-75 overflow-auto">
          <CChart
            type={chartType}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "chart",
                  fill: false,
                  // borderColor: "#fff",
                  // pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  // pointBorderColor: "#fff",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
              ],
            }}
            options={{
              responsive: true,
              // layout: {
              //   autoPadding: true,
              //   padding: "3px",
              // },
              animations: {
                tension: {
                  duration: 1000,
                  easing: "linear",
                  from: 1,
                  to: 0,
                  loop: true,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                scales: {
                  x: {
                    grid: {
                      color: "#fff",
                    },
                    ticks: {
                      color: "#fff",
                    },
                  },
                  y: {
                    grid: {
                      color: "#fff",
                    },
                    ticks: {
                      color: "#fff",
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <span className="text-center text-danger">
        Chart Entered Data NotValid
      </span>
    );
  }
}
