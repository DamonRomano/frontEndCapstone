angular.module('weatherStoryApp')

function getTempFlavor(t) {
  if (t < 32) return "It's freezing outside,";
  else if (t > 32 && t <= 45) return "Looks cold outside,";
  else if (t > 45 && t <= 60) return "Seems cool out,";
  else if (t > 60 && t <= 72) return "Shaping up to be mild today,";
  else if (t > 72 && t <= 85) return "Gonna be warm today,";
  else if (t > 85 && t <= 96) return "Looks hot out there,";
  else if (t > 96 && t <= 102) return "Ugh. You can tell from in here that it'll unbearably hot out there";
  else return "It is so hot as to be inhospitible to human life,";
}

function getHumidityFlavor(h) {
  if (h <= 20) return " mummifyingly arid";
  else if (h > 20 && h <= 40) return " dry";
  else if (h > 40 && h <= 60) return " not too humid";
  else if (h > 60 && h <= 80) return " a bit muggy";
  else return " like breathing through a wet rag";
}

function getWindFlavor(w) {
  if (w < 1) return ", and dead calm."
  else if (w > 1 && w <= 3) return ", and a light air barely stirs the trees.";
  else if (w > 3 && w <= 7) return "; a light breeze takes the edge off, but you wish for more.";
  else if (w > 7 && w <= 12) return " and...ah!...here is a gentle breeze. Simple pleasures, indeed.";
  else if (w > 12 && w <= 18) return ", and a moderate breeze cools your brow.";
  else if (w > 18 && w <= 24) return ", but a fresh breeze lifts your spirits.";
  else if (w > 24 && w <= 31) return "; a strong breeze reminds you to keep one hand on your hat.";
  else if (w > 31 && w <= 38) return ". A high wind whips up the dust in the road and takes leaves from the trees.";
  else if (w > 38 && w <= 46) return ". Gale's brewing up. Best not to dally.";
  else if (w > 46 && w <= 54) return ". A strong gale is afoot. Tread with care.";
  else if (w > 54 && w <= 63) return ". Storm is nigh. Roads aren't safe.";
  else if (w > 63 && w <= 72) return ". A violent storm comes hard up upon you. Ought to get inside.";
  else return ". A hurricane! Board the windows! Hide!";
}