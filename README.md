# web3-todo

### Setup Backend

```
cd backend
npm install
cp .env.example .env
```

deploy smart contract

```
npx hardhat run scripts/deploy.js --network goerli
```

- copy contract address to frontend/src/config.js
- copy file backend/artifacts/contracts/TaskContract.sol/TaskContract.json to frontend/src/utils/TaskContract.json

### Setup Frontend

```
cd frontend
npm install
npm run dev
```
