"use strict";

const msgid = () => {
  let str = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 2; i++) {
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return `${str}${new Date().getTime()}`;
};

console.log(msgid());
