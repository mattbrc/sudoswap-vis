import { createClient } from "urql";

const APIURL =
  "https://api.studio.thegraph.com/query/28082/sudoswap-main/v0.0.2";

export const client = createClient({
  url: APIURL,
});

export const query = `
  query Data {
    nftdeposits(first: 5) {
      id
      pair
      timestamp
    }
    dailyETHPoolStats(first: 5) {
      id
      dayString
      nftContract
      swapVolumeETH
    }
    dailyETHProtocolStats(first: 5) {
      dayString
      approxProtocolFees
      swapVolumeETH
      dayTimestamp
      approxPoolRevenue
    }
    pairs(first: 5) {
        owner
        nft
        spotPrice
        ethLiquidity
      }
  }
  `;
