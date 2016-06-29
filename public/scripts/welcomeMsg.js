angular.module('weatherStoryApp')

function getRandomItem(strings) {
  var len = strings.length;

  var randomWelcomeString =
      strings[Math.floor(Math.random() * len)];

  // var r =  Math.floor( Math.random() * 10 );
  // while (r > len) {
  //     if (r > len) r = r - len;
  // }
  // r = Math.max(r - 1, 0);

  return strings[randomWelcomeString];

  $scope.myWelcome =
    function getWelcomeMessage() {
      var strings =
      [
        '"Welcome, Blue Valk"...no, wait. Not that again.',
        'TETSUOOOOOOOO!!!!!11!!',
        '"ALL YOUR BASE ARE BELO"...what the heck?',
        '"The choice is made! The Traveller has come!"',
        '...passed under the sign that read, "Abandon all hope, ye who enter here", you felt the hairs on the back of your neck stand up. Pretty sure Thompkins just fouled his pants. No Boris Karloff in gauze bandages here, but the fear is no less real.',
        '...captain found a space herpe scuttling through the galley. Damn. Sending Percy the Perfect Robot to ferret the nasty thing out of the enviro ducts was bad enough, but you were really looking forward to that soup.',
        '...hop up over the crest, boots gently crunching the regolith. And you would never have believed it were it not staring you in face, plain as day: a genuine colony of Nazis holed up on the dark side of the moon'
      ]
    };
};


