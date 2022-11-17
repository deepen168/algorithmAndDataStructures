//Print ping pong at interval with timeout

function printPingPong(timeOut, betweenInterval) {
  let ping = true;

  let interval = setInterval(() => {
    ping ? console.log("Ping") : console.log("Pong");
    ping = !ping;
  }, betweenInterval);

  setTimeout(() => {
    clearInterval(interval);
  }, timeOut);
}
