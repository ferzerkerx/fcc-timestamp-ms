'use strict';

var TimeStampService = require('../service/timestampService.js');

module.exports = function (app) {


    var timeStampService = new TimeStampService();

    app.route('/:data')
        .get(timeStampService.returnDate);

};

