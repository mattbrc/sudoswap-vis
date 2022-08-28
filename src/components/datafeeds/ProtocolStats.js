import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

function ProtocolStats() {
  const GET_STATS = gql`
    query GetStats {
      dailyETHProtocolStats {
        dayString
        approxProtocolFees
        swapVolumeETH
        dayTimestamp
        approxPoolRevenue
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const volumeETH = [];

  for (let i = 0; i < 5; i++) {
    var valueToPush = {};
    valueToPush["volume"] =
      Math.round(
        (data.dailyETHProtocolStats[i].swapVolumeETH * 100) / 10 ** 18
      ) / 100;
    valueToPush["date"] = data.dailyETHProtocolStats[i].dayString;
    volumeETH.push(valueToPush);
  }

  return (
    <div>
      {data.dailyETHProtocolStats.map((stat, _index) => (
        <div key={_index}>
          <p>Date: {stat.dayString}</p>
          <p>
            Revenue: Ξ{" "}
            {Math.round((stat.approxPoolRevenue * 100) / 10 ** 18) / 100}
          </p>
          <p>
            Volume: Ξ {Math.round((stat.swapVolumeETH * 100) / 10 ** 18) / 100}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProtocolStats;
