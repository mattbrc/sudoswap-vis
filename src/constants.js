import { gql } from "@apollo/client";

export const GITHUB_HANDLE = "mattbrc";
export const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;

export const GET_STATS = gql`
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
