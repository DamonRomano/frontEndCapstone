angular.module('weatherStoryApp')

function getRandomItem(strings) {
    var len = strings.length;
    var r =  Math.floor( Math.random() * 10 );
    while (r > len) {
        if (r > len) r = r - len;
    }
    r = Math.max(r - 1, 0);

    return strings[r];
};
$scope.myWelcome =
  function getWelcomeMessage() {
    var welcomeStrings =
    [
      '"Welcome, Blue Valk"...no, wait. Not that again.',
      'TETSUOOOOOOOO...',
      '"ALL YOUR BASE ARE BELO"...what the heck?',
      '"The choice is made! The Traveller has come!"',
      '...passed under the sign that read, "Abandon all hope, ye who enter here", you felt the hairs on the back of your neck stand up. Pretty sure Thompkins just fouled his pants. No Boris Karloff in gauze bandages here, but the fear is no less real.',
      '...captain found a space herpe scuttling through the galley. Damn. Sending Percy the Perfect Robot to ferret the nasty thing out of the enviro ducts was bad enough, but you were really looking forward to that soup.',
      '...hop up over the crest, boots gently crunching the regolith. And you would never have believed it were it not staring you in face, plain as day: a genuine colony of Nazis holed up on the dark side of the moon'
    ]
  };

$scope.myTimeOfDay =
  function getTimeOfDayMessage() {
    var timeOfDayStrings =
    [
      "morning": "You crawl out of bed, shaking off the last threads of your increasingly weird dream. What day is it? Doesn't matter. What kind of a day is it? Yeah, there's better question.",
      "midday": "You stand up from your work table, wondering how you came to deserve an employer that hangs '60s floral-print drapes and tells you with a straight face that those colors have been shown to improve productivity.",
      "night": "On your way to bed, you inexplicably need to know what the local fauna will suffer tonight that you are sheltered from."
    ]
  };