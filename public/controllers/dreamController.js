app.controller('DreamController', function($scope, $timeout, $location) {
  const dream = this
    var strings =
    [
      '"Welcome, Blue Valk"...no, wait. Not that again.',
      'TETSUOOOoooo!!!!!11!!',
      '"ALL YOUR BASE ARE BELO"...what the heck?',
      '"The choice is made! The Traveller has come!"',
      '...passed under the sign that read, "Abandon all hope, ye who enter here", you felt the hairs on the back of your neck stand up. Pretty sure Thompkins just fouled his pants. No Boris Karloff in gauze bandages here, but the fear is no less real.',
      '...captain found a space herpe scuttling through the galley. Damn. Sending Percy the Perfect Robot to ferret the nasty thing out of the enviro ducts was bad enough, but you were really looking forward to that turkey.',
      '...hop up over the crest, boots gently crunching the regolith. And you would never have believed it were it not staring you in face, plain as day: a genuine colony of Nazis holed up on the dark side of the moon'
    ]

    var len = strings.length;
      dream.myWelcome = strings[Math.floor(Math.random() * len)];
      $timeout()

  dream.navigation = function(locationString) {
    $location.path('/' + locationString)
  };

});



