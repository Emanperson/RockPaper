//1 is rock, 2 is paper, 3 is sissors

// This whole area is just setup
document.getElementById("player2").hidden = true;
var debug = "2";

var userchoice = "";
var botchoice = "";
var userchoicename = "N/A";
var botchoicename = "N/A";
var twoplayers = "0";
var opponentchoice = "0";
var winner = "Nobody";
const colorpick = document.getElementById("colorpick");
var chosencolor = "#000000";
const decider = document.getElementById("modechanger");
// end setup area

playvsbot();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getbotchoice() {
  botchoice = getRandomInt(1, 3);
  console.log(botchoice);
}

function rock() {
  userchoice = 1;
  userchoicename = "rock";
  if (debug == "0") {
    play();
  } else if (debug == "1") {
    document.getElementById("result").innerHTML = "Player 2's turn";
  } else if (debug == "2") {
    document.getElementById("result").innerHTML = "Please choose a mode.";
  }
}

function paper() {
  userchoice = 2;
  userchoicename = "paper";
  if (debug == "0") {
    play();
  } else if (debug == "1") {
    document.getElementById("result").innerHTML = "Player 2's turn";
  } else if (debug == "2") {
    document.getElementById("result").innerHTML = "Please choose a mode.";
  }
}

function cuttythings() {
  userchoice = 3;
  userchoicename = "scissors";
  if (debug == "0") {
    play();
  } else if (debug == "1") {
    document.getElementById("result").innerHTML = "Player 2's turn";
  } else if (debug == "2") {
    document.getElementById("result").innerHTML = "Please choose a mode.";
  }
}

function getbotchoicename() {
  if (botchoice == 1) {
    botchoicename = "rock";
  } else if (botchoice == 2) {
    botchoicename = "paper";
  } else if (botchoice == 3) {
    botchoicename = "scissors";
  } else {
    botchoicename = "Themronuclear warhead";
    //  just as a backup ig
  }
}

// originally to test the play() function but it works for player 2
function enabledebug() {
  debug = "1";
  console.log("player mode");
}

function disabledebug() {
  debug = "0";
  console.log("bot mode");
}

function botrock() {
  botchoice = 1;
  play();
}

function botpaper() {
  botchoice = 2;
  play();
}

function botcuttythings() {
  botchoice = 3;
  play();
}

function updatechoice() {
  if (decider.checked) {
    play_vs_Player();
    console.log("on");
  } else {
    console.log("off");
    playvsbot();
  }
}

function playvsbot() {
  // document.getElementById("playbot").style.backgroundColor = "#00ccff";
  // document.getElementById("playPlayer").style.backgroundColor = "#f0f0f0";
  disabledebug();
  document.getElementById("player2").hidden = true;
}

function play_vs_Player() {
  // document.getElementById("playbot").style.backgroundColor = "#f0f0f0";
  // document.getElementById("playPlayer").style.backgroundColor = "#00ccff";
  enabledebug();
  document.getElementById("player2").hidden = false;
}

function play() {
  winner = "Nobody";
  if (debug == 1) {
    // nothing...
  } else {
    getbotchoice();
  }
  getbotchoicename();

  //   checks user winning
  if (
    (userchoice == 1 && botchoice == 3) ||
    (userchoice == 2 && botchoice == 1) ||
    (userchoice == 3 && botchoice == 2)
  ) {
    if (debug == "1") {
      winner = "Player 1";
    } else if (debug == "0") {
      winner = "You";
    }
  }

  //   checks bot winning
  else if (
    (botchoice == 1 && userchoice == 3) ||
    (botchoice == 2 && userchoice == 1) ||
    (botchoice == 3 && userchoice == 2)
  ) {
    if (debug == "1") {
      winner = "Player 2";
    } else if (debug == "0") {
      winner = "The Bot";
    }
  }
  // Check for a draw
  else if (userchoice == botchoice) {
    document.getElementById("result").innerHTML =
      "You chose " +
      userchoicename +
      ", Bot chose " +
      botchoicename +
      "<br>Nobody Won";
  } else {
    winner = "Nobody";
  }

  document.getElementById("result").innerHTML =
    "You chose " +
    userchoicename +
    ", Bot chose " +
    botchoicename +
    "<br>Winner: " +
    winner;
}
// backgrounds! :D
document.getElementById("bgchoice").hidden = true;
var walpapersshown = "false";
const toggler = document.getElementById("toggler");
const main = document.querySelector("main");

function togglewallpaper() {
  if (walpapersshown == "true") {
    document.getElementById("bgchoice").hidden = true;
    toggler.innerHTML = "Show Walpapers";
    walpapersshown = "false";
  } else {
    document.querySelector("html").style.cursor = "progress";
    document.getElementById("bgchoice").hidden = false;
    toggler.innerHTML = "Hide Walpapers";
    walpapersshown = "true";
    document.querySelector("html").style.cursor = "default";
  }
}

// Windows
function setXP() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://archive.org/download/windows-xp-bliss-wallpaper/windows-xp-bliss-4k-lu-1920x1080.jpg')";
}
function setVista() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://i.redd.it/1lu31x1angtb1.jpg')";
}
function setSeven() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://ia904603.us.archive.org/10/items/Windows-wallcollection/1920x1200_%28Windows_7%29.jpg')";
}
function setEleven() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg')";
}
function setElevenCopilot() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://images3.alphacoders.com/136/1363355.jpeg')";
}

// Mac
function setSnowLeopard() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-6.png')";
}
function setLion() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-7.png')";
}
function setMountanLion() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-8.jpg')";
}
function setMavericks() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-9.jpg')";
}
function setMojaveDay() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-14-Day.jpg')";
}
function setMojaveNight() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-14-Night.jpg')";
}
function setCatalinaDay() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-15-Day.jpg')";
}
function setCatalinaNight() {
  resetbg();
  document.querySelector("html").style.backgroundImage =
    "url('https://512pixels.net/downloads/macos-wallpapers/10-15-Night.jpg')";
}

// https://512pixels.net/projects/default-mac-wallpapers-in-5k

function clearimg() {
  document.querySelector("html").style.backgroundImage = "url('')";
}
function applycolor() {
  clearimg();
  var chosencolor = colorpick.value;
  console.log(chosencolor);
  document.querySelector("html").style.background = chosencolor;
}
function resetbg() {
  document.querySelector("html").style.background = "";
}
// fixes the background being zoomed in after setting a color as a background
// then setting an image
