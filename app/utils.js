export const timeDifference = (current, previous) => {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    console.log('current ' + current);
    console.log('previous ' + previous);

    if (Math.round(elapsed/1000) <= msPerMinute) {
        return 'just now';

    } else if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + 's';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + 'm';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + 'h';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + 'd';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + 'mo';
    }

    else {
        return Math.round(elapsed/msPerYear ) + 'y';
    }
}
