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
        dailyETHProtocolStats(first: 10) {
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
