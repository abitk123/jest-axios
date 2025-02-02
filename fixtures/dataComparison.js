const moment = require('moment-timezone');

function dataComparison(created_on) {
    const timeInUTC = moment.utc(); 
    const timeInBerlin = timeInUTC.clone().tz('Europe/Berlin'); 
    const apiDate = new Date(created_on);
    const apiDateInBerlin = moment(apiDate).tz('Europe/Berlin');

    const apiYear = apiDateInBerlin.year();
    const apiMonth = apiDateInBerlin.month(); 
    const apiDay = apiDateInBerlin.date();
    const apiHour = apiDateInBerlin.hour();

    const currentYear = timeInBerlin.year();
    const currentMonth = timeInBerlin.month(); 
    const currentDay = timeInBerlin.date();
    const currentHour = timeInBerlin.hour();

    console.log('API Date:', apiDateInBerlin);
    console.log('Current Date:', timeInBerlin)

    return currentYear === apiYear && currentMonth === apiMonth && currentDay === apiDay && currentHour === apiHour;
}

module.exports = {
    dataComparison
};
