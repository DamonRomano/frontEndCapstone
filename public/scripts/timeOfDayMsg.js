angular.module('weatherStoryApp')

function getRandomItem(strings) {
  var len = strings.length;

  var randomTimeOfDayString =
      strings[Math.floor(Math.random() * len)];

  // var r =  Math.floor( Math.random() * 10 );
  // while (r > len) {
  //     if (r > len) r = r - len;
  // }
  // r = Math.max(r - 1, 0);

  return strings[randomTimeOfDayString];

  $scope.myTimeOfDay =
    function getTimeOfDayMessage() {
      var timeOfDayStrings =
      [
        {"morning": "You crawl out of bed, shaking off the last threads of your increasingly weird dream. What day is it? Doesn't matter. What kind of a day is it? Yeah, there's better question."},
        {"midday": "You stand up from your work table, wondering how you came to deserve an employer that hangs '60s floral-print drapes and tells you with a straight face that those colors have been shown to improve productivity."},
        {"night": "On your way to bed, you inexplicably need to know what the local fauna will suffer tonight that you are sheltered from."}
      ]
    }
};
