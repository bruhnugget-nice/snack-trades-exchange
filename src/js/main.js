//THEME DRAMA
//Gets the theme button element.
let themeButton = document.getElementById("themeChanger");
let headingDiv = document.getElementById("heading");
//Object for storing theme information
const themes = {
  light: {
    body: "#dedede",
    text: "#121212",
    header: "#a60000",
    description:
      "Look, I don't know why you would do this, but just to tell you, you really should switch over to the dark side.",
  },
  dark: {
    body: "#121212",
    text: "#dedede",
    header: "#a60000",
    description: "Finally, inner peace.",
  },
  tabularasa: {
    body: "#121212",
    text: "#121212",
    header: "#121212",
    description: "John Locke.mp4",
  },
  void: {
    body: "#dedede",
    text: "#dedede",
    header: "#dedede",
    description: "Void",
  },
};
//The function given to the button for updating the theme.
function onThemeButtonClick() {
  let theme = themes[document.getElementById("theme-picker").value];
  document.body.style.backgroundColor = theme.body;
  document.body.style.color = theme.text;
  headingDiv.style.backgroundColor = theme.header;
  
  alert(theme.description);
}
//Gives the button the onThemeButtonClick function.
themeButton.addEventListener("click", onThemeButtonClick);
//OTHER STUFF
// all the elements :)
let convertButton = document.getElementById("convertButton"),
  output = document.getElementById("results"),
  snackTo = document.getElementById("snackTo"),
  snackFrom = document.getElementById("snackFrom"),
  amount = document.getElementById("amount");
// object for amounts
const amounts = {
  oreo: {
    amount: 1, // oreo is the baseline
    name: "Oreo(s)",
    unit: " (in cookie(s))"
  },
  taki: {
    amount: 3, // takis are three times as much as oreos
    name: "Taki(s) Fuego",
    unit: " (in stick(s))",
  },
  twinkie: {
    amount: 0.2, // and so on ...
    name: "Twinkie(s)",
    unit: " (in packet(s))",
  },
  welch: {
    amount: 0.2,
    name: "Welch's Fruit Gummies",
    unit: " (in packet(s))",
  },
};
// rounding function because computers are bad at decimal math
function round(n, precision) {
  precision = Math.pow(10, precision);
  return Math.round(n * precision) / precision;
}
//function for convert
var convert = function () {
  let amountNum = parseInt(amount.value),
    to = snackTo.value,
    from = snackFrom.value;
  if (from === to) return "Look, they are the same amount.";

  // if there is a unit, the unit. if there isn't, (s)
  let fromUnit = amounts[from].unit || "(s).";
  // you get the idea
  let toUnit = amounts[to].unit || "(s).";
  let fromName = amounts[from].name || from;
  let toName = amounts[to].name || to;

  // calculate amount
  let newAmount = amounts[from].amount * amountNum * amounts[to].amount;
  // round it because 0.1 + 0.2 = 0.30000000000000004
  // in other words, computers are bad at math
  newAmount = round(newAmount, 2);
  
    // if input is not a number
    if (isNaN(amountNum)) return `How can you have "${amount.value}" ${fromName}${fromUnit}?!`;

  // return the output
  return `${amountNum} ${fromName}${fromUnit} is/are equal to ${newAmount} ${toName}${toUnit}.`;
};

convertButton.addEventListener("click", function () {
  output.innerHTML = convert();
});
