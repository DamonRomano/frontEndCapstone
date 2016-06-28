function getTempFlavor(t) {
  if (t < 32) return "freezing.";
  else if (t > 32 && t <= 45) return "cold";
  else if (t > 45 && t <= 60) return "cool";
  else if (t > 60 && t <= 72) return "mild";
  else if (t > 72 && t <= 85) return "warm";
  else if (t > 85 && t <= 96) return "hot";
  else if (t > 96 && t <= 102) return "unbearably hot";
  else return "so hot as to be inhospitible to human life";
}

function getHumidityFlavor(h) {
  if (h <= 20) return "...mummifyingly arid.";
  else if (h > 20 && h <= 40) return "...and dry.";
  else if (h > 40 && h <= 60) return "...surprisingly reasonable, in fact.";
  else if (h > 60 && h <= 80) return "...a bit muggy.";
  else return "...and it's like breathing through a wet rag. Ugh.";
}

function getWindFlavor (w) {
  if (w < 1) return "Dead calm."
  else if (w > 1 && w <= 3) return "A light air barely stirs the trees.";
  else if (w > 3 && w <= 7) return "A light breeze takes the edge off, but you wish for more.";
  else if (w > 7 && w <= 12) return "And, ah, here is a gentle breeze. Simple pleasures, indeed.";
  else if (w > 12 && w <= 18) return "A moderate breeze cools your brow.";
  else if (w > 18 && w <= 24) return "A fresh breeze lifts your spirits.";
  else if (w > 24 && w <= 31) return "But a strong breeze reminds you to keep one hand on your hat.";
  else if (w > 31 && w <= 38) return "A high wind whips up the dust in the road and takes leaves from the trees.";
  else if (w > 38 && w <= 46) return "A gale is brewing up.  Watch your footing.";
  else if (w > 46 && w <= 54) return "But a strong gale is afoot. Cover up well.";
  else if (w > 54 && w <= 63) return "A storm is nigh. Best not to dally.";
  else if (w > 63 && w <= 72) return "A violent storm comes hard up upon you. Ought to get inside.";
  else return "A hurricane! Board the windows! Hide!";
}