async function fileManipulation(filename, config) {
  var fileExt = filename.split(".")[filename.split(".").length-1];

  if (config.method == "XVID") {

    for (var i = 0; i < xvid.length; i++) {
      if (filename.includes(xvid[i].for)) {
        return `${xvid[i].to}.${fileExt}`;
      }
    }

    return "";

  } else {
    console.error(`Unrecognized Method`);
    process.exit(1);
  }
}

var xvid = [
  // ============= START SEASON 1 ===============
  { for: "Doctor Who - S01E01 (001) - An Unearthly Child (1) - An Unearthly Child", to: "S01E01" },
  { for: "Doctor Who - S01E01 (001) - An Unearthly Child (2) - The Cave of Skulls", to: "S01E02" },
  { for: "Doctor Who - S01E01 (001) - An Unearthly Child (3) - The Forest of Fear", to: "S01E03" },
  { for: "Doctor Who - S01E01 (001) - An Unearthly Child (4) - The Firemaker", to: "S01E04" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (1) - The Dead Planet", to: "S01E05" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (2) - The Survivors", to: "S01E06" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (3) - The Escape", to: "S01E07" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (4) - The Ambush", to: "S01E08" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (5) - The Expedition", to: "S01E09" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (6) - The Ordeal", to: "S01E10" },
  { for: "Doctor Who - S01E02 (002) - The Daleks (7) - The Rescue", to: "S01E11" },
  { for: "Doctor Who - S01E03 (003) - The Edge of Destruction (1) - The Edge of Destruction", to: "S01E12" },
  { for: "Doctor Who - S01E03 (003) - The Edge of Destruction (2) - The Brink of Disaster", to: "S01E13" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (1) - The Roof of the World (Recon)", to: "S01E14 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (2) - The Singing Sands (Recon)", to: "S01E15 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (3) - Five Hundred Eyes (Recon)", to: "S01E16 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (4) - The Wall of Lies (Recon)", to: "S01E17 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (5) - Rider from Shang-Tu (Recon)", to: "S01E18 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (6) - Mighty Kublai Khan (Recon)", to: "S01E19 - [RECON]" },
  { for: "Doctor Who - S01E04 (004) - Marco Polo (7) - Assassin at Peking (Recon)", to: "S01E20 - [RECON]" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (1) - The Sea of Death", to: "S01E21" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (2) - The Velvet Web", to: "S01E22" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (3) - The Screaming Jungle", to: "S01E23" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (4) - The Snows of Terror", to: "S01E24" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (5) - Sentence of Death", to: "S01E25" },
  { for: "Doctor Who - S01E05 (005) - The Keys of Marinus (6) - The Keys of Marinus", to: "S01E26" },
  { for: "Doctor Who - S01E06 (006) - The Aztecs (1) - The Temple of Evil", to: "S01E27" },
  { for: "Doctor Who - S01E06 (006) - The Aztecs (2) - The Warriors of Death", to: "S01E28" },
  { for: "Doctor Who - S01E06 (006) - The Aztecs (3) - The Bride of Sacrifice", to: "S01E29" },
  { for: "Doctor Who - S01E06 (006) - The Aztecs (4) - The Day of Darkness", to: "S01E30" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (1) - Strangers in Space", to: "S01E31" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (2) - The Unwilling Warriors", to: "S01E32" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (3) - Hidden Danger", to: "S01E33" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (4) - A Race Against Death", to: "S01E34" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (5) - Kidnap", to: "S01E35" },
  { for: "Doctor Who - S01E07 (007) - The Sensorites (6) - A Desperate Venture", to: "S01E36" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (1) - A Land of Fear", to: "S01E37" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (2) - Guests of Madame Guillotine", to: "S01E38" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (3) - A Change of Identity", to: "S01E39" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (4) - The Tyrant of France (Recon)", to: "S01E40 - [RECON]" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (5) - A Bargain of Necessity (Recon)", to: "S01E41 - [RECON]" },
  { for: "Doctor Who - S01E08 (008) - The Reign of Terror (6) - Prisoners of Conciergerie", to: "S01E42" },
  // ================== END OF SEASON 1 ============================
  // ================== START SEASON 2 =============================
  { for: "Doctor Who - S02E01 (009) - Planet of Giants (1) - Planet of Giants", to: "S02E01" },
  { for: "Doctor Who - S02E01 (009) - Planet of Giants (2) - Dangerous Journey", to: "S02E02" },
  { for: "Doctor Who - S02E01 (009) - Planet of Giants (3) - Crisis", to: "S02E03" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (1) - World's End", to: "S02E04" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (2) - The Daleks", to: "S02E05" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (3) - Day of Reckoning", to: "S02E06" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (4) - The End of Tomorrow", to: "S02E07" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (5) - The Waking Ally", to: "S02E08" },
  { for: "Doctor Who - S02E02 (010) - The Dalek Invasion of Earth (6) - Flashpoint", to: "S02E09" },
  { for: "Doctor Who - S02E03 (011) - The Rescue (1) - The Powerful Enemy", to: "S02E10" },
  { for: "Doctor Who - S02E03 (011) - The Rescue (2) - Desperate Measures", to: "S02E11" }
];
module.exports = { fileManipulation };
