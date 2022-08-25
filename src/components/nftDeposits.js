import { client, query } from "../api.js";
import { useEffect, useState } from "react";

function NFTDeposits() {
  const [deposits, setDeposits] = useState(null);
  const [pools, setPools] = useState(null);

  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log("response", response);
    setPools(response.data.dailyETHPoolStats);
    setDeposits(response.data.nftdeposits);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {deposits?.map((deposit, _index) => (
        <div key={_index}>
          <p>ID: {deposit.id}</p>
          <p>Pair: {deposit.pair}</p>
          <p>Timestamp: {deposit.timestamp}</p>
        </div>
      ))}
      <h1>Pool Stats</h1>
      {pools?.map((pool, _index) => (
        <div key={_index}>
          <p>Contract: {pool.nftContract}</p>
          <p>Volume: {pool.swapVolumeETH}</p>
        </div>
      ))}
    </div>
  );
}

export default NFTDeposits;
