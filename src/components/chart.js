import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
];

function Chart() {
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data2015} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
}

export default Chart;
