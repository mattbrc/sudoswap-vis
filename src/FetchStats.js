import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

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

function FetchStats() {
  useEffect(() => {
    FetchProtocolStats();
  });

  function FetchProtocolStats() {
    const { loading, error, data } = useQuery(GET_STATS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
  }

  return <div></div>;
}

export default FetchStats;
