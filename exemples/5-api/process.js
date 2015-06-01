// Appellé comme suit: `node --harmony process.js parametre

console.log(process.argv); // ['node', '/path/to/process.js', 'parametre']

console.log(process.execArgv); // ['--harmony']

// nextTick

console.log('Avant');

process.nextTick(function() {
  console.log('Callback');
});

console.log('Après');
