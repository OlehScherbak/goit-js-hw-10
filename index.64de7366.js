console.log(fetch("https://restcountries.com/v3.1/name/".concat("ukr","?fields=name.official,capital,population,flags.svg,languages")).then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)})));
//# sourceMappingURL=index.64de7366.js.map
