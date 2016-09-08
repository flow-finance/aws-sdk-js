require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'DirectConnect')) {
  apiLoader.services['directconnect'] = {};
  AWS.DirectConnect = Service.defineService('directconnect', ['2012-10-25']);

  apiLoader.services['directconnect']['2012-10-25'] = require('../apis/directconnect-2012-10-25.min');
  apiLoader.services['directconnect']['2012-10-25'].paginators = require('../apis/directconnect-2012-10-25.paginators').pagination;
}

module.exports = AWS.DirectConnect;
