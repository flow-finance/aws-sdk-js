require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'CloudWatch')) {
  apiLoader.services['cloudwatch'] = {};
  AWS.CloudWatch = Service.defineService('cloudwatch', ['2010-08-01']);

  apiLoader.services['cloudwatch']['2010-08-01'] = require('../apis/monitoring-2010-08-01.min');
  apiLoader.services['cloudwatch']['2010-08-01'].paginators = require('../apis/monitoring-2010-08-01.paginators').pagination;
  apiLoader.services['cloudwatch']['2010-08-01'].waiters = require('../apis/monitoring-2010-08-01.waiters2').waiters;
}

module.exports = AWS.CloudWatch;
