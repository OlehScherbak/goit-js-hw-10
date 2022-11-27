fetch("https://restcountries.com/v3.1/name/${name}").than((function(n){return n.json()})).than((function(n){console.log(n)})).catch((function(n){console.log(n)}));
//# sourceMappingURL=index.fb1c1b17.js.map
