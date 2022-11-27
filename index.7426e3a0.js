console.log(fetch("https://restcountries.com/v3/name/".concat("ukr","?fields=name.official,capital,population,flags,languages")).then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)})));
//# sourceMappingURL=index.7426e3a0.js.map
