"use strict";

// require modules
const uuidv1 = require("uuid/v1"),
  uuidv3 = require("uuid/v3"),
  uuidv4 = require("uuid/v4"),
  uuidv5 = require("uuid/v5");

// Version 1 (timestamp)
console.log("uuid/v1 ⇨ timestamp");
console.log(`${uuidv1()}\n`);

// Version 3 (namespace)
console.log("uuid/v3 ⇨ namespace");
console.log(
  `hello.example.com (DNS) ⇨ ${uuidv3("hello.example.com", uuidv3.DNS)}`
);
console.log(
  `http://example.com/hello (URL) ⇨ ${uuidv3(
    "http://example.com/hello",
    uuidv3.URL
  )}\n`
);

// Version 4 (random)
console.log("uuid/v4 ⇨ random");
console.log(`${uuidv4()}\n`);

// Version 5 (namespace)
console.log("uuid/v5 ⇨ namespace");
console.log(
  `hello.example.com (DNS) ⇨ ${uuidv5("hello.example.com", uuidv5.DNS)}`
);
console.log(
  `http://example.com/hello (URL) ⇨ ${uuidv5(
    "http://example.com/hello",
    uuidv5.URL
  )}\n`
);
