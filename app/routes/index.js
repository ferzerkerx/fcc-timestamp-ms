'use strict';

var TimeStampService = require(path + '../service/timestampService.js');

module.exports = function (app) {


    var timeStampService = new TimeStampService();

    app.route('/:data')
        .get(timeStampService.returnDate);

};

