angular.module('app')

function getTheme(hour) {
  if (hour > 6 && hour <= 10) return "morning";
  else if (hour > 10 && hour <= 18) return "midday";
  else return "night";
}