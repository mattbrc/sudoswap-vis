import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GET_STATS } from "../../constants.js";

function ProtocolSwapVolume() {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  const { loading, error, data } = useQuery(GET_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <Box
        sx={{
          height: 400,
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        >
          Protocol Swap Volume
        </Typography>
      </Box>
      <div className="Stats-text">
        {data.dailyETHProtocolStats.map((stat, _index) => (
          <div key={_index}>
            <p>Date: {stat.dayString}</p>
            <p>
              Revenue: Ξ{" "}
              {Math.round((stat.approxPoolRevenue * 100) / 10 ** 18) / 100}
            </p>
            <p>
              Volume: Ξ{" "}
              {Math.round((stat.swapVolumeETH * 100) / 10 ** 18) / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProtocolSwapVolume;
