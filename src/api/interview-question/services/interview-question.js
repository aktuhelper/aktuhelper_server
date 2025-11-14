'use strict';

/**
 * interview-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interview-question.interview-question');
