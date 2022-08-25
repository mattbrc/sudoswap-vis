import logo from "./logo.svg";
import "./App.css";
import { createClient } from "urql";
import { useEffect, useState } from "react";

const APIURL =
  "https://api.studio.thegraph.com/query/28082/sudoswap-main/v0.0.2";

const query = `
query {
  newPairs(first: 5) {
    id
    address
    owner
    blockNumber
  }
  pairs(first: 5) {
    id
    owner
    createdTx
    createdAt
    nft
    spotPrice
    ethLiquidity
  }
}
`;

const client = createClient({
  url: APIURL,
});

function App() {
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
    <div className="App">
      <h1>SudoAMM Order Book</h1>
      {pairs?.map((pair, _index) => (
        <div key={_index}>
          <p>ID: {pair.id}</p>
          <p>Owner: {pair.owner}</p>
          <p>NFT: {pair.nft}</p>
          <p>Spot Price: {pair.spotPrice}</p>
          <p>Liquidity: {pair.ethLiquidity}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
