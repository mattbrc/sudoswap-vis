import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
import * as React from "react";
import { GET_STATS } from "../../constants.js";

function ProtocolSwapVolume() {
  const { loading, error, data } = useQuery(GET_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
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
