var fs = require('fs');

console.log(fs.readFileSync('text', {encoding: 'utf8'}));

console.log(fs.readdirSync(__dirname));
