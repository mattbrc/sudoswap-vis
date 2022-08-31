import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/28082/sudoswap-main/v0.0.2",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetStats {
        dailyETHProtocolStats(first: 100) {
          dayString
          numSwaps
          swapVolumeETH
          approxProtocolFees
          approxPoolRevenue
          nftsDeposited
          nftsWithdrawn
          numBuys
          numSells
        }
        dailyETHPoolStats(orderBy: dayString, orderDirection: desc, first: 10) {
          dayString
          nftContract
          numSwaps
          swapVolumeETH
          approxPoolFees
          approxPoolRevenue
          ethDeposited
          ethWithdrawn
          nftsDeposited
          nftsWithdrawn
          numBuys
          numSells
        }
        spotPriceUpdates(orderBy: timestamp, orderDirection: desc, first: 10) {
          nft
          pair
          newSpotPrice
          timestamp
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
