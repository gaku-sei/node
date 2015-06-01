var fs = require('fs');

var readStream = fs.createReadStream('in'); // fs.ReadStream sous-class de stream.Readable

var writeStream = fs.createWriteStream('out'); // fs.WriteStream sous-classe de stream.Writable

readStream.pipe(writeStream);
