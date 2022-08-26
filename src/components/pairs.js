import { client, query } from "../api.js";
import { useEffect, useState } from "react";

function Pairs() {
  const [pairs, setPairs] = useState(null);

  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log("response", response);
    setPairs(response.data.pairs);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Pair Stats</h2>
      {pairs?.map((pair, _index) => (
        <div key={_index}>
          <p>NFT: {pair.nft}</p>
          <p>
            Revenue: Ξ {Math.round((pair.spotPrice * 100) / 10 ** 18) / 100}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Pairs;
