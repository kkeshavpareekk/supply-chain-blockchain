<h1>
  <br>  
  Decentralized Supply Chain
  <br>
</h1>

## Description

Supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.
Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites.

## Architecture

The smart contract is being written with Solidity which is then compiled, migrated and deployed using Truffle.js on the local blockchain network created using Ganache-cli.The frontend uses Web3.js to communicate with the smart contract and local blockchain network and is written using React.js framework for better component and state lifecycle management.The requests from user are forwarded to frontend through Nginx(load balancer) and Express.js for dynamic routing.

<p>
  The lifecycle of a product starts when <strong>manufactureProduct()</strong> is called(while making an entry) after the final product is manufactured and the product and manufacturer details are entered in the blockchain. The <strong>productHistory[]</strong> gets initialized and the current product data is stored with the current owner(manufacturer).
</p>
<p>
  Now this product shall be available to the Third Party for purchase. On being purchased by a third party seller, the <strong>purchasedByThirdParty()</strong> gets called where the owner is set to thirdParty and the present data gets pushed to the <strong>productHistory[]</strong> (which helps us to track the origin and handling of the product). Simultaneously, the product is shipped by the manufacturer (<strong>shipToThirdParty()</strong>) and is received by the Third Party where <strong>receivedByThirdParty()</strong> is called and the details of the Third Party seller are entered. Each of these checkpoint's data is stored in product history with the state being updated at each step. 
</p>
<p>
  The online purchase of the product takes place from the Third Party. When the customer orders the product, it is shipped by the Third Party (<strong>shipByThirdParty()</strong>) and received by the delivery hub where the <strong>receivedByDeliveryHub()</strong> is called. Here the customer address is stored, owner is set to Delivery Hub, details of the Delivery Hub are fed and the current data state gets pushed to the <strong>productHistory[].</strong>
</p>
<p>
  Finally the product is shipped by the Delivery Hub (<strong>shipByDeliveryHub()</strong>) and received by the customer where the <strong>receivedByCustomer()</strong> is called and the current and final state gets pushed to the <strong>productHistory[]</strong>.
</p>
<p>
  All of these juncture functions shall be called only after complete verification of product and <strong>productHistory[]</strong> while entering a checkpoint. (eg:- Customer accepts and confirms the product by clicking the receive button from his account only after it verifies the product). 
</p>
<p>
  <strong>fetchProductPart1()</strong>, <strong>fetchProductPart2()</strong>, <strong>fetchProductPart3()</strong>, <strong>fetchProductHistoryLength()</strong>, <strong>fetchProductCount()</strong>, <strong>fetchProductState()</strong> are the functions to retreive data of a product queried with UID and data type as product(current state) or history.
</p>

Clone the repository

```Bash
git clone https://github.com/kkeshavpareekk/decentralized-supply-chain.git && cd decentralized-supply-chain
```

Install dependencies

```Bash
npm i
```

Install ganache

```Bash
npm i -g ganache-cli
```

open ganache and set up workspace

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
