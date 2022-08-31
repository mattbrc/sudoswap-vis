import { useQuery } from "@apollo/client";
import "../../App.css";
import { GET_STATS } from "../../constants.js";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function PoolChart() {
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

  const poolETH = [];

  const volumeDefs = [
    { field: "date" },
    { field: "Pool Fees Ξ" },
    { field: "Pool Revenue Ξ" },
    { field: "ETH Swap Volume Ξ" },
    { field: "Num Swaps" },
    { field: "Contract" },
  ];

  for (let i = 0; i < 100; i++) {
    var valueToPush = {};
    valueToPush["date"] = data.dailyETHPoolStats[i].dayString;
    valueToPush["Pool Fees Ξ"] =
      Math.round((data.dailyETHPoolStats[i].approxPoolFees * 100) / 10 ** 18) /
      100;
    valueToPush["Pool Revenue Ξ"] =
      Math.round(
        (data.dailyETHPoolStats[i].approxPoolRevenue * 100) / 10 ** 18
      ) / 100;
    valueToPush["ETH Swap Volume Ξ"] =
      Math.round((data.dailyETHPoolStats[i].swapVolumeETH * 100) / 10 ** 18) /
      100;
    valueToPush["Num Swaps"] = data.dailyETHPoolStats[i].numSwaps;
    valueToPush["Contract"] = data.dailyETHPoolStats[i].nftContract;
    poolETH.push(valueToPush);
  }

  // console.log("test arr", poolETH);

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500, width: 800 }}>
      <AgGridReact
        rowData={poolETH}
        columnDefs={volumeDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default PoolChart;
