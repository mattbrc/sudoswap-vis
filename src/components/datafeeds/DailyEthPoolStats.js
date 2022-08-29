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
      {data.dailyETHPoolStats.map((stat, _index) => (
        <div key={_index}>
          <p>Date: {stat.dayString}</p>
          <p>NFT Contract: {stat.nftContract}</p>
          <p>
            Approx Pool Fees: Ξ{" "}
            {Math.round((stat.approxPoolFees * 100) / 10 ** 18) / 100}
          </p>
          <p>Num Swaps: {stat.numSwaps}</p>
        </div>
      ))}
    </div>
  );
}

export default ProtocolSwapVolume;
