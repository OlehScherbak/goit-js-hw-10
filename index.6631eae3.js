console.log(fetch(`https://restcountries.com/v3/name/${"ukr"}?fields=name.official,capital,population,flags,languages`).then((o=>o.json())).then((o=>{console.log(o)})).catch((o=>{console.log(o)})));
//# sourceMappingURL=index.6631eae3.js.map
