const path = require('path');

module.exports = {
mode: process.env.NODE_ENV || 'production',
entry: './index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'dist.js',
library: 'protactor'
}
};