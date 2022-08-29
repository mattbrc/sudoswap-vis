import { useQuery, gql } from "@apollo/client";
// import { useEffect, useState } from "react";

function ProtocolSwapVolume() {
  const GET_STATS = gql`
    query GetStats {
      dailyETHProtocolStats(first: 5) {
        dayString
        approxProtocolFees
        swapVolumeETH
        dayTimestamp
        approxPoolRevenue
      }
      dailyETHPoolStats(first: 5) {
        id
        dayTimestamp
        dayString
        nftContract
        approxPoolFees
        numSwaps
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="Stats-text">
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

export default ProtocolSwapVolume;
