"use strict";
// import {FusionSDK, PrivateKeyProviderConnector } from '@1inch/fusion-sdk'
// import Web3 from "web3"
// const makerPrivateKey = '0x123....'
// const makerAddress = '0x123....'
// const nodeUrl = '....'
// const blockchainProvider = new PrivateKeyProviderConnector(
//     makerPrivateKey,
//     new Web3(nodeUrl)
// )
// const sdk = new FusionSDK({
//     url: 'https://api.1inch.dev/fusion',
//     network: 1,
//     blockchainProvider
// })
// sdk.placeOrder({
//     fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
//     toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
//     amount: '50000000000000000', // 0.05 ETH
//     walletAddress: makerAddress,
//     // fee is an optional field
//     fee: {
//         takingFeeBps: 100, // 1% as we use bps format, 1% is equal to 100bps
//         takingFeeReceiver: '0x0000000000000000000000000000000000000000' //  fee receiver address
//     }
// }).then(console.log)
