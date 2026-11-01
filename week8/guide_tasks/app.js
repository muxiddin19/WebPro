// Runs after the HTML is fully parsed, so #status already exists
const status = document.getElementById('status');
status.textContent = '✅ DOM was ready when app.js ran (defer works)';
status.className = 'ok';
console.log('app.js ran (deferred)');