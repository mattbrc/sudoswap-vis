import { client, query } from "../api.js";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Protocol Stats</h1>
      {stats?.map((stat, _index) => (
        <div key={_index}>
          <p>Date: {stat.dayString}</p>
          <p>Fees: Ξ {stat.approxProtocolFees / 10 ** 18}</p>
          <p>Volume: Ξ {stat.swapVolumeETH / 10 ** 18}</p>
        </div>
      ))}
    </div>
  );
}

export default ProtocolStats;
