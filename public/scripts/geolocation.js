if ("geolocation" in navigator) {
  console.log("Yay!; we have geolocation!");
} else {
    console.log("Bummer! No geolocation!");
}

if (navigator.geolocation) {
  var timeoutVal = 10 * 1000 * 1000;
  navigator.geolocation.getCurrentPosition(
    displayPosition,
    // displayError,
    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
  );
}
else {
  alert("Geolocation is not supported by this browser");
}

function displayPosition(position) {
  alert("Latitude: "
        + position.coords.latitude
        + ", Longitude: "
        + position.coords.longitude);
}

// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
//   console.log("Where You At");
// });

// var watchID = navigator.geolocation.watchPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
//   console.log("I be watchin' yo azz");
// });