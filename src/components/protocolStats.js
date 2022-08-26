import { client, protocolData } from "../api.js";
import { useEffect, useState } from "react";
import graphql2chartjs from "graphql2chartjs";
import { Bar } from "react-chartjs-2";

function ProtocolStats() {
  const [stats, setStats] = useState(null);

  async function fetchData() {
    const response = await client.query(protocolData).toPromise();
    console.log("response", response);
    setStats(response.data.dailyETHProtocolStats);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
    </div>
  );
}

export default ProtocolStats;
