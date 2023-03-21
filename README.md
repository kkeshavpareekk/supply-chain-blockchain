<h1>
  <br>  
  Decentralized Supply Chain
  <br>
</h1>

#### Use sepolia test network for doing transactions.

### deploy link:

https://stately-croquembouche-72e0e2.netlify.app/

## Description

Supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.
Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites.

## Project Setup locally

Clone the repository

```Bash
git clone https://github.com/kkeshavpareekk/decentralized-supply-chain.git && cd decentralized-supply-chain
```

Install dependencies

```Bash
npm i
```

Download ganache

```Bash
open ganache and set up workspace
```

Migrate the contracts

```Bash
truffle migrate  --reset
```

Open a second terminal and enter the client folder

```Bash
cd client
```

Install all packages in the package.json file

```Bash
npm i
```

Run the app

```Bash
npm start
```

The app gets hosted by default at port 3000.
