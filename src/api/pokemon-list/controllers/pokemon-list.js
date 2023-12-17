'use strict';

/**
 * pokemon-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pokemon-list.pokemon-list');
