'use strict';

/**
 * practice-set service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::practice-set.practice-set');
