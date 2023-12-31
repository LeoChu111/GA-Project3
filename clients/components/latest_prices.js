const apiKey = "RaNyFRwl3v2rkURciQCC63A07f8iXVm3f2I9myA7";
const wtiPriceSpan = document.getElementById("wti-price");
const brentPriceSpan = document.getElementById("brent-price");
const naturalGasPriceSpan = document.getElementById("natural-gas-price");

fetch(`https://api.futures-api.com/last?symbol=CL`, {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    wtiPriceSpan.innerText = data.data[0].last;
  });

fetch(`https://api.futures-api.com/last?symbol=BB`, {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    brentPriceSpan.innerText = data.data[0].last;
  });

fetch(`https://api.futures-api.com/last?symbol=NG`, {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    naturalGasPriceSpan.innerText = data.data[0].last;
  });
