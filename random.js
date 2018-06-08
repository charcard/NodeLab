"use strict";

let randomQuotes = ["If it bleeds we can kill it", "Embrace the suck", "Just do it", "What I do is not up to you", "Doubt kills more dreams than failure ever will", "Truth is on the side of the oppressed"];
const random = () => {
    let quote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    return quote;
  }

  console.log(random());
module.exports = random;