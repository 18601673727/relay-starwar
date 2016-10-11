var getbabelRelayPlugin = require('babel-relay-plugin');

try {
  var schema = require('../data/schema.json');
  module.exports = getbabelRelayPlugin(schema.data);
} catch(e) {
  console.log(e);
}
