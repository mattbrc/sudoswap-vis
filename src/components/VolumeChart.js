import { useQuery, gql, Query } from "@apollo/client";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

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

function VolumeChart() {
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

  console.log("test arr", volumeETH);
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={volumeETH} // data accessor for x values
          x="date"
          // data accessor for y values
          y="volume"
        />
      </VictoryChart>
      <p>hi</p>
    </div>
  );
}

export default VolumeChart;
