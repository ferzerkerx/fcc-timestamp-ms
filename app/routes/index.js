'use strict';

var path = process.cwd();
var TimeStampService = require(path + '/app/service/timestampService.js');

module.exports = function (app) {


    var timeStampService = new TimeStampService();

    app.route('/:data')
        .get(timeStampService.returnDate);

};

