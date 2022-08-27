import { useQuery, gql } from "@apollo/client";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
import "../App.css";
import ProtocolStats from "./ProtocolStats";

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

function Home() {
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

  // <h1>SudoAMM Visualization 🚀</h1>

  console.log("test arr", volumeETH);
  return (
    <div>
      <h1 className="App-text">sudoswap visualization 🚀</h1>
      <p className="App-sub-text">Recent Stats:</p>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={volumeETH} // data accessor for x values
          x="date"
          // data accessor for y values
          y="volume"
          height={50}
          width={50}
        />
      </VictoryChart>
    </div>
  );
}

export default Home;
