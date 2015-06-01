#!/usr/bin/env node

var spawn = require('child_process').spawn;
var path = require('path');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var ls = function(dossier) {
  return new Promise(function(resolve, reject) {
    var cmd = spawn('ls', ['-A', dossier]);
    var out = '', err = '';

    cmd.stdout.on('data', function(data) {
      out += data;
    });

    cmd.stderr.on('data', function(data) {
      err += data;
    });

    cmd.on('close', function(code) {
      if(code === 0) {
        resolve(out.trim().split('\n'));
      } else {
        reject({code: code, message: err});
      }
    });
  });
};

var grep = function(pattern, chemin) {
  return fs.statAsync(chemin)
    .then(function(stats) {
      if(stats.isFile()) {
        return fs.readFileAsync(chemin, 'utf-8')
          .then(function(content) {
            return content.search(pattern) !== -1 ? chemin : null;
          });
      } else {
        return null;
      }
    });
};

var pattern = process.argv[2];
var dossier = process.argv[3];

if(pattern && dossier) {
  ls(dossier)
    .then(function(fichiers) {
      return Promise
        .all(fichiers.map(function(fichier) {
          return grep(pattern, path.resolve(dossier, fichier));
        }))
        .then(function(fichiers) {
          fichiers = fichiers.filter(function(fichier) {
            return fichier !== null;
          });
          
          if(fichiers.length > 0) {
            console.log(fichiers.join('\r\n'));
          }
        })
    })
    .catch(function(err) {
      console.error(err);
    });
} else {
  console.error('Vous devez fournir un pattern et un dossier');
}
