'use strict';

const _ = require('lodash');

const {getFixturesConfig} = require('../fixtures.hermione.conf');

module.exports = _.merge(getFixturesConfig(__dirname), {});
