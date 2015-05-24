'use strict';
var
    config = require('./config'),
    handlebars = require('express-handlebars');

module.exports = function(expressApp) {
    var fileExtension = '.hbs';

    expressApp.engine(fileExtension, handlebars({
        extname: fileExtension,
        layoutsDir: config.viewsDir + 'layouts/',
        partialsDir: config.viewsDir + 'partials/',
        defaultLayout: 'main'
    }));

    expressApp.set('view engine', fileExtension);
};
