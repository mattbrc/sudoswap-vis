import { useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

export const alchemy = new Alchemy(settings);

function Pairs() {
  return <div></div>;
}

export default Pairs;
