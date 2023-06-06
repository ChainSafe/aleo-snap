# AleoSnap - MetaMask Snap for Aleo ecosystem

## Table of Contents

1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Usage and Developing](#usage-and-developing)
    - [Run Local Development Environment](#run-local-development-environment)
    - [Initialize Snap](#initialize-snap)
    - [Invoke Snap Methods](#invoke-snap-methods)

<a name="introduction"></a>
## Introduction

AleoSnap is a MetaMask Snap that enables MetaMask users to interact with Aleo blockchain.  
This package provides the functionality to integrate the Aleo blockchain into MetaMask using the Snaps system.  

<a name="requirements"></a>
## Requirements

Ensure you are set up and ready to go with the [AleoSnap Monorepo](../../README.md#prerequisites).  
To use the AleoSnap package, you need to have the [MetaMask Flask](https://metamask.io/flask/) browser extension installed and set up, and be familiar with [developing Snaps](https://metamask.io/snaps/).

<a name="usage-and-developing"></a>
## Usage and Developing

To use and develop AleoSnap, you will need to interact with the MetaMask extension using the [JSON-RPC API](https://docs.metamask.io/guide/snaps.html#json-rpc-api).

<a name="run-local-development-environment"></a>
### Run Local Development Environment

Run the Snap local development environment:

```shell
yarn start
```

<a name="initialize-snap"></a>
### Initialize Snap

Open a browser with any website (e.g., http://example.com/), with the Developer Tools open.  
Run this command in the console to initialize the Snap from local source:

```javascript
window.ethereum.request({
  method: "wallet_requestSnaps",
  params: {
    "local:http://localhost:8081": {},
  },
});
```

or initialize from npm:  

```javascript
window.ethereum.request({
  method: "wallet_requestSnaps",
  params: {
    "npm:@chainsafe/aleo-snap": {},
  },
});
```

<a name="invoke-snap-methods"></a>
### Invoke Snap Methods

Now you are ready to run any of the Snap commands:

```javascript
window.ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId: "local:http://localhost:8081",
    request: {
      method: "aleo_getAccountt",
      params: {},
    },
  },
}).then(console.log);
```
