module.exports = {
  closestClock: closestClockFnc,
  dayOrNight: dayNightFnc,
  arrow: arrowFnc,
  number: numberFnc,
  format: formatFnc
};

function formatFnc(date) {
  return closestClockFnc(date) + arrowFnc(date) + numberFnc(date) + dayNightFnc(date);
}

function closestClockFnc(date) {
  var hour = date.getHours() % 12;
  var third = Math.floor(date.getMinutes() / 20);
  var correctedHour = (third === 2) ? hour + 1 : hour;
  switch(correctedHour) {
    case 1:
      return third === 1 ? "🕜" : "🕐";
    case 2:
      return third === 1 ? "🕝" : "🕑";
    case 3:
      return third === 1 ? "🕞" : "🕒";
    case 4:
      return third === 1 ? "🕟" : "🕓";
    case 5:
      return third === 1 ? "🕠" : "🕔";
    case 6:
      return third === 1 ? "🕡" : "🕕";
    case 7:
      return third === 1 ? "🕢" : "🕖";
    case 8:
      return third === 1 ? "🕣" : "🕗";
    case 9:
      return third === 1 ? "🕤" : "🕘";
    case 10:
      return third === 1 ? "🕥" : "🕙";
    case 11:
      return third === 1 ? "🕦" : "🕚";
    case 0:
      return third === 1 ? "🕧" : "🕛";
  }
}

function dayNightFnc(date) {
  var quarterDay = Math.floor(date.getHours() / 6);
  return (quarterDay === 1 || quarterDay === 2) ? "🌞" : "🌜";
}

function arrowFnc(date) {
  //TODO: intellij handle this really strangely, chack it how much character is this!
  var sixth = Math.floor(date.getMinutes() / 10);
  switch(sixth) {
    case 0:
      return "↘️";
    case 1:
      return "↩️";
    case 2:
      return "↗️";
    case 3:
      return "↖️";
    case 4:
      return "↪️";
    case 5:
      return "↙️";
  }
}

function intToEmoji(i) {
  switch(i) {
    case 0:
      return "0⃣";
    case 1:
      return "1⃣";
    case 2:
      return "2⃣";
    case 3:
      return "3⃣";
    case 4:
      return "4⃣";
    case 5:
      return "5⃣";
    case 6:
      return "6⃣";
    case 7:
      return "7⃣";
    case 8:
      return "8⃣";
    case 9:
      return "9⃣";
    case 10:
      return "🔟";
    default:
      return "🔢";
  }
}
function numberFnc(date) {
  var minutes = date.getMinutes();
  var sixth = Math.floor( minutes / 10);
  var lastDigit = minutes % 10;
  switch(sixth) {
    case 0:
    case 1:
    case 3:
      return intToEmoji(lastDigit);
    case 2:
    case 4:
    case 5:
      return intToEmoji(10 - lastDigit);
  }
}
