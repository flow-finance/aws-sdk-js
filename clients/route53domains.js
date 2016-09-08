require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Route53Domains')) {
  apiLoader.services['route53domains'] = {};
  AWS.Route53Domains = Service.defineService('route53domains', ['2014-05-15']);

  apiLoader.services['route53domains']['2014-05-15'] = require('../apis/route53domains-2014-05-15.min');
  apiLoader.services['route53domains']['2014-05-15'].paginators = require('../apis/route53domains-2014-05-15.paginators').pagination;
}

module.exports = AWS.Route53Domains;
