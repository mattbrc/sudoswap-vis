import { client, query } from "../api.js";
import { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

function ProtocolStats() {
  const [stats, setStats] = useState(null);

  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log("response", response);
    setStats(response.data.dailyETHProtocolStats);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const testData = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
  ];

  return (
    <div>
      <h2>Protocol Stats</h2>
      {stats?.map((stat, _index) => (
        <div key={_index}>
          <p>Date: {stat.dayString}</p>
          <p>
            Revenue: Ξ{" "}
            {Math.round((stat.approxPoolRevenue * 100) / 10 ** 18) / 100}
          </p>
          <p>
            Volume: Ξ {Math.round((stat.swapVolumeETH * 100) / 10 ** 18) / 100}
          </p>
        </div>
      ))}
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={testData} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
}

export default ProtocolStats;
