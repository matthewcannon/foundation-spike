'use strict';
var
    express = require('express'),
    app = express();

require('./middleware')(app);
require('./routes')(app);
require('./viewEngine')(app);

app.listen(3000);
