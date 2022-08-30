import { useQuery } from "@apollo/client";
import "../../App.css";
import { GET_STATS } from "../../constants.js";
import { AgGridReact } from "ag-grid-react";
import { useState, useEffect, useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function VolumeChart() {
  const [rowData, setRowData] = useState([
    { make: "Ford", model: "Focus", price: 40000 },
    { make: "Toyota", model: "Celica", price: 45000 },
    { make: "BMW", model: "435i", price: 55000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

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
    { field: "contract" },
    { field: "date" },
    { field: "number of swaps" },
  ];

  for (let i = 0; i < 5; i++) {
    var valueToPush = {};
    valueToPush["contract"] = data.dailyETHPoolStats[i].nftContract;
    valueToPush["date"] = data.dailyETHPoolStats[i].dayString;
    valueToPush["number of swaps"] = data.dailyETHPoolStats[i].numSwaps;
    volumeETH.push(valueToPush);
  }

  console.log("test arr", volumeETH);

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500, width: 600 }}>
      <AgGridReact
        rowData={volumeETH}
        columnDefs={volumeDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default VolumeChart;
