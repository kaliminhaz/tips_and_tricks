// Small demo application for the Hackosquad GitHub secret-hunting exercise.
const config = require("./config");

function start() {
  console.log("Hackosquad demo app started.");
  console.log("Environment:", config.environment);
  console.log("Payment integration:", config.paymentProvider);
}

start();
