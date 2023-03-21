const HDWalletProvider = require("@truffle/hdwallet-provider");
const menomic =
  "aunt track cage swarm modify vivid wagon power produce motor sun brisk";

const infuraProjectId = "";

const path = require("path");

module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    goerli: {
      provider: () =>
        new HDWalletProvider(
          menomic,
          "https://goerli.infura.io/v3/78bb29855b364d4ebf24c40789e58530"
        ),
      network_id: 5,
      chain_id: 5,
      gas: 5500000,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: "0x5aa1f50801C53EcDfBdcD4916BF4114F21E1274F",
    },
    develop: {
      port: 8545,
    },
  },
};
