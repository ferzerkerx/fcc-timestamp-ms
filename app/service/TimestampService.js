'use strict';


function TimeStampService () {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.returnDate = function (req, res) {
        var data = req.params.data;
        var number = Number(data);
        var date = undefined;

        if (!isNaN(number)) {
            date = new Date(number);
        }
        else {
            number = Date.parse(data);
            if (!isNaN(number)) {
                date = new Date();
                date.setTime(number);
            }
        }

        var timeStampObj = {unix: null, natural: null};
        if (date !== undefined) {
            timeStampObj.unix = date.getTime();
            timeStampObj.natural = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        }

        res.json(timeStampObj);
    };

}

module.exports = TimeStampService;