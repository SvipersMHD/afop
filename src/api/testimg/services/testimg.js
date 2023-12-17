'use strict';

/**
 * testimg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testimg.testimg');
