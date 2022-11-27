fetch("https://restcountries.com/v3.1/name/${name}").than((o=>o.json())).than((o=>{console.log(o)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.ad27510c.js.map
