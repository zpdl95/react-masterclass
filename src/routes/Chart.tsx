import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IChart {
  coinId: string;
}

interface IHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: IChart) {
  const { isLoading, data } = useQuery<IHistory[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading && "Loading Chart..."}
      {!isLoading && (
        <ApexChart
          type="line"
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              zoom: { enabled: false },
              background: "rgba(0,0,0,.5)",
            },
            stroke: {
              width: 3,
            },
            xaxis: { axisTicks: { show: false }, axisBorder: { show: false } },
            yaxis: { show: false },
          }}
          series={[
            {
              name: "openPrice",
              data: data?.map((day) => {
                return {
                  x: new Date(day.time_open).toLocaleDateString("kr"),
                  y: day.open.toFixed(2),
                };
              }),
            },
            {
              name: "closePrice",
              data: data?.map((day) => {
                return {
                  x: new Date(day.time_close).toLocaleDateString("kr"),
                  y: day.close.toFixed(2),
                };
              }),
            },
          ]}
        />
      )}
    </div>
  );
}
export default Chart;
