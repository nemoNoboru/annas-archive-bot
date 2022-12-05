var fs = require('fs');

module.exports = {
    read: (filename) => fs.readFileSync(filename, 'utf8')
} 