var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2CTether%2CBinance%20Coin%2CXRP%2CSolana%2CTRON&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    sol.innerHTML = response.solana.usd
});
