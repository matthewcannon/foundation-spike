'use strict';
var
    express = require('express'),
    controllers = require('./controllers');

module.exports = function(expressApp) {
    expressApp.get('/', controllers.personalDetails);
    expressApp.use('/css', express.static(__dirname + '/css'));
    expressApp.use('/js', express.static(__dirname + '/js'));
};
