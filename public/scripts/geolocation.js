if ("geolocation" in navigator) {
  console.log("Yay!; we have geolocation!");
} else {
    console.log("Bummer! No geolocation!");
}


function getLocation() {
  var crd = {
    latitude: 0,
    longitude: 0
  };
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(function(pos) {
    crd.latitude = pos.coords.latitude;
    crd.longitude = pos.coords.longitude;
  },
  function(error) {
    console.log("Weather error, Bitch.")
  }, options);

return crd;
}
