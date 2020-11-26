const followingDay =today => {

    today = (prompt("Enter day:")).toLowerCase()
    let nextDay;
    switch(today){
        case 'monday':
            nextDay = 'Tuesday';
            break;
        case 'tuesday':
            nextDay = 'Wednesday';
            break;
        case 'wednesday':
            nextDay = 'Thursday';
            break;
        case 'thursday':
            nextDay = 'Friday';
            break;
        case 'friday':
            nextDay = 'Saturday';
            break;
        case 'saturday':
            nextDay = 'Sunday';
            break;
        case 'sunday':
            nextDay = 'Monday';
            break;
        default:
            nextDay = 'Invalid';
            break;
    }
    console.log(`Next day is ${nextDay}`)
}

followingDay();