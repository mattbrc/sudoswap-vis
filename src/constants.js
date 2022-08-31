import { gql } from "@apollo/client";

export const GITHUB_HANDLE = "mattbrc";
export const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;

export const GET_STATS = gql`
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
    dailyETHPoolStats(orderBy: dayString, orderDirection: desc, first: 100) {
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
    spotPriceUpdates(orderBy: timestamp, orderDirection: desc, first: 100) {
      nft
      pair
      newSpotPrice
      timestamp
    }
  }
`;
