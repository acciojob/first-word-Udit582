function firstWord(s) {
    // Trim leading/trailing spaces
  s = s.trim();

  // If string is empty after trimming, return empty string
  if (s.length === 0) return "";

  // Find index of first space
  let spaceIndex = s.indexOf(" ");

  // If no space found, return the whole string
  if (spaceIndex === -1) return s;

  // Otherwise, return substring up to the first space
  return s.substring(0, spaceIndex);
	
}

// Do not change the code beow

const s = prompt("Enter String:");
alert(firstWord(s));
