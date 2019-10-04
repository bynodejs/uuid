console.log("new Date().getTime().toString(36)");
console.log(new Date().getTime().toString(36));
console.log("\n");

console.log("Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000");
console.log(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
console.log("\n");

console.log(
  "(Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(16)"
);
console.log(
  (
    Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
  ).toString(16)
);
console.log("\n");

console.log(
  'parseInt((new Date().toISOString()).slice(0, 10).replace(/-/g, "") + Math.floor(Number((new Date().toISOString()).slice(11, 17).replace(/:/g, ""))) * Math.random(), 10)'
);
console.log(
  parseInt(
    new Date()
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "") +
      Math.floor(
        Number(
          new Date()
            .toISOString()
            .slice(11, 17)
            .replace(/:/g, "")
        )
      ) *
        Math.random(),
    10
  )
);
console.log("\n");
