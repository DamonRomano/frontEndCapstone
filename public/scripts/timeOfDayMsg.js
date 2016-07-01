angular.module('app')

function getRandomItem(strings) {
  var len = strings.length;

  var randomTimeOfDayString =
      strings[Math.floor(Math.random() * len)];

  return strings[randomTimeOfDayString];

  $scope.myTimeOfDay =
    function getTimeOfDayMessage() {
      var timeOfDayStrings =
      [
        {"morning": "You crawl out of bed, shaking off the last threads of your increasingly weird dreams. What day is it? Doesn't matter. What kind of a day is it? Yeah, there's the better question."},
        {"midday": "You stand up from your work table, wondering how you came to deserve an employer that hangs '60s floral-print drapes and tells you with a straight face that those colors have been shown to improve productivity...and who then boarded up the windows beneath."},
        {"night": "On your way to bed, you realize that knowing how the unsheltered local fauna will suffer tonight will help you sleep better."}
      ]
    }
};
