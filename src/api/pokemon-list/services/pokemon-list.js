'use strict';

/**
 * pokemon-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokemon-list.pokemon-list');
