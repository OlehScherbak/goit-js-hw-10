console.log(fetch(`https://restcountries.com/v3.1/name/${"ukr"}?fields=name.official,capital,population,flags.svg,languages`).then((o=>o.json())).then((o=>{console.log(o)})).catch((o=>{console.log(o)})));
//# sourceMappingURL=index.c6568bfe.js.map
