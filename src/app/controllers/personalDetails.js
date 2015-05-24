'use strict';
var getStaticData = require('./staticFile');

module.exports = function(request, response) {
    getStaticData(function(error, staticData) {
        response.render('personalDetails', staticData);
    });
};
