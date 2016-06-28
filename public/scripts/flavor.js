function getTempFlavor(t) {
  if (t < 32) return "freezing";
  else if (t > 32 && t <= 50) return  "cool";
  else if (t > 50 && t <= 72) return  "mild";
  else if (t > 72 && t <= 85) return  "warm";
  else if (t > 85 && t <= 95) return  "hot";
  else return "blazing";
}

function getHumidityFlavor(h) {
  if (h <= 20) return "mummifying";
  else if (h > 20 && h <= 40) return "dry";
  else if (h > 40 && h <= 60) return "reasonable";
  else if (h > 60 && h <= 80) return "a bit muggy";
  else return "like breathing through a wet rag";
}

function getWindFlavor (w) {
  if (w < 1) return "dead calm"
  else if (w > 1 && w <= 3) return "light air";
  else if (w > 3 && w <= 7) return "light breeze";
  else if (w > 7 && w <= 12) return "gentle breeze";
  else if (w > 12 && w <= 18) return "moderate breeze";
  else if (w > 18 && w <= 24) return "fresh breeze";
  else if (w > 24 && w <= 31) return "strong breeze";
  else if (w > 31 && w <= 38) return "high wind";
  else if (w > 38 && w <= 46) return "gale";
  else if (w > 46 && w <= 54) return "strong gale";
  else if (w > 54 && w <= 63) return "storm";
  else if (w > 63 && w <= 72) return "violent storm";
  else return "hurricane";
}