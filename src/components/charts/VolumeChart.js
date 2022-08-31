import { useQuery } from "@apollo/client";
import "../../App.css";
import { GET_STATS } from "../../constants.js";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function VolumeChart() {
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

  const volumeETH = [];

  const volumeDefs = [
    { field: "date" },
    { field: "Protocol Revenue Ξ" },
    { field: "Pool Revenue Ξ" },
    { field: "ETH Swap Volume Ξ" },
    { field: "NFTs Deposited" },
    { field: "NFTs Withdrawn" },
    { field: "Num Buys" },
    { field: "Num Sells" },
  ];

  // Math.round((data.dailyETHPoolStats[i].swapVolumeETH * 100) / 10 ** 18) / 100;

  for (let i = 0; i < 100; i++) {
    var valueToPush = {};
    valueToPush["date"] = data.dailyETHProtocolStats[i].dayString;
    valueToPush["Protocol Revenue Ξ"] =
      Math.round(
        (data.dailyETHProtocolStats[i].approxProtocolFees * 100) / 10 ** 18
      ) / 100;
    valueToPush["Pool Revenue Ξ"] =
      Math.round(
        (data.dailyETHProtocolStats[i].approxPoolRevenue * 100) / 10 ** 18
      ) / 100;
    valueToPush["ETH Swap Volume Ξ"] =
      Math.round(
        (data.dailyETHProtocolStats[i].swapVolumeETH * 100) / 10 ** 18
      ) / 100;
    valueToPush["NFTs Deposited"] = data.dailyETHProtocolStats[i].nftsDeposited;
    valueToPush["NFTs Withdrawn"] = data.dailyETHProtocolStats[i].nftsWithdrawn;
    valueToPush["Num Buys"] = data.dailyETHProtocolStats[i].numBuys;
    valueToPush["Num Sells"] = data.dailyETHProtocolStats[i].numSells;
    volumeETH.push(valueToPush);
  }

  // console.log("test arr", volumeETH);

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500, width: 800 }}>
      <AgGridReact
        rowData={volumeETH}
        columnDefs={volumeDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default VolumeChart;
