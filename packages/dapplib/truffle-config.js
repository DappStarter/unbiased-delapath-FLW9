require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remain million hockey argue blue trophy'; 
let testAccounts = [
"0xd9a93c9254a246a4ed35be276c75ece8ce5b51b46877967bad9bfca0ba8f8a74",
"0xc6a52d753fa7dc5e03950b95c4e56865cbc89772f745ad84927d2a02c613c4b4",
"0x5753e33d8dd1654b0e5092fb85e5743a4da1e47355729408e2db9666ef0bca8e",
"0x73ad61e0e95340db89fa52f7f50496d33a8d67c309d90da3fa36ba4f2a1bee43",
"0x4bc1dedd430963fd42fff6b96069a5401b2887bd9fd2b6378ff7cadfee17d6b8",
"0xfe7a1303fc2521262e60d14fd953d35d1599c186e711093cc367198a0bbd3e58",
"0xb2783cd0aaba24bd28c7c8ca96b34b69e2d017d421c6e06bf8def40255d3263e",
"0xcbeb050ea9e11be9d7e9d42d6b6310d1578962ab1dc91e657455e426d9c74637",
"0x98191e5ddadc2fe134422ff2707e4baf349ea2276e52b33597552fb9ab29a3b9",
"0x569e4b7ffbcb0444679bc3597f89cb49c8c2a44c8fb331cecd7e3d5325595e12"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

