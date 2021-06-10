require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain evil grid globe flock there'; 
let testAccounts = [
"0xc00dcd21218cd7dc6c38bfae2e283811d91e9c8ff2f2670d2249645c4217467d",
"0xa64bd9254d61cb5ae5bd487d0dc98cc9f879d0ca2947333e3297fd965e0a4d0f",
"0xf36d52b5b48a22a9920784961f1ae4e5a505b89da13776b828c3018e08a6c2b3",
"0x5b3640b17bb59a49af6e2733da78d4dd045dc7acf185d7f7992f86cc3f0ce87e",
"0xfd95054884dab8bd11b2fe4ff9acba60a0e914b1b6e58c54e5be616df5e430a7",
"0xb9352a5db14131494f0b42fffd65113670db1fa205a371836b9241fb252d0926",
"0x90458ea243e8104da6ba46c373d05a64d35a4ae05d3e7775a6260d41efd1255a",
"0xb2307f08e50a598f8bcd6c8753efd8c97290f7aa952d4fd30d813f7a32673f10",
"0x914eebdc473bdfb433915627032b620c9f255bd3d25b542eead8526fe6807320",
"0xaed90718fc56dd60ae36a8b0f6c934ed496b3f39d47cfd220ffeac80e1389217"
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

