// Simulated heavy work; does not touch the DOM
const start = Date.now();
while (Date.now() - start < 50) {}
console.log('analytics.js ran (async)');