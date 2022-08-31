import { useQuery } from "@apollo/client";
import "../../App.css";
import { GET_STATS } from "../../constants.js";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function ArbChart() {
  // alchemy API settings
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);

  alchemy.nft
    .getFloorPrice("0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d")
    .then(console.log);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  const { loading, error, data } = useQuery(GET_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const arbETH = [];

  const volumeDefs = [
    { field: "timestamp" },
    { field: "AMM Spot Price Ξ" },
    //{ field: "Market Floor Price Ξ" },
    { field: "NFT" },
    { field: "Pair Contract" },
  ];

  for (let i = 0; i < 5; i++) {
    var valueToPush = {};
    valueToPush["timestamp"] = data.spotPriceUpdates[i].timestamp;
    valueToPush["AMM Spot Price Ξ"] =
      Math.round((data.spotPriceUpdates[i].newSpotPrice * 1000) / 10 ** 18) /
      1000;
    //valueToPush["Market Floor Price Ξ"] = alchemy.nft.getFloorPrice(
    //  data.spotPriceUpdates[i].nft
    //);
    valueToPush["NFT"] = data.spotPriceUpdates[i].nft;
    valueToPush["Pair Contract"] = data.spotPriceUpdates[i].pair;
    arbETH.push(valueToPush);
  }

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500, width: 800 }}>
      <AgGridReact
        rowData={arbETH}
        columnDefs={volumeDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default ArbChart;
