function brakeChain() {
  // Set div to unbroken chain image
  let chain = document.getElementById("chain");
  chain.innerHTML = "&#xf0c1;";

  // Set div to broken chain image
  setTimeout(function() {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

brakeChain();

// Rerun animation every two seconds
setInterval(brakeChain, 2000);

function chargeBattery() {
  // Set div to empty battery image
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";

  // Set div to load one battery bar more
  setTimeout(function() {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  // Set div to load one battery bar more
  setTimeout(function() {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  // Set div to load one battery bar more
  setTimeout(function() {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  // Set div to load last battery bar
  setTimeout(function() {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

chargeBattery();

// Rerun animiation every five seconds
setInterval(chargeBattery, 5000);

// Animated Hour Glass
function tipHourGlass() {
  // Set div to empty epoch hour glass image
  let hourGlass = document.getElementById("hour-glass");
  hourGlass.innerHTML = "&#xf251;";

  // Set div to next set hour glass image
  setTimeout(function() {
    hourGlass.innerHTML = "&#xf252;";
  }, 1000);

  // Set div to final hour glass image
  setTimeout(function() {
    hourGlass.innerHTML = "&#xf253;";
  }, 2000);
}

tipHourGlass();

// Rerun animiation every three seconds
setInterval(tipHourGlass, 3000);
