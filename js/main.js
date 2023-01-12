//THEME DRAMA
        //Gets the theme button element.
        var themeButton = document.getElementById("themeChanger");
        var headingDiv = document.getElementById("heading");
        //The function given to the button for updating the theme.
        var onThemeButtonClick = function() {
            var theme = document.getElementById("theme-picker").value;
            if (theme === "light") {
                alert("Look, I don't know why you would do this, but just to tell you, you really should switch over to the dark side.");
                document.body.style.backgroundColor = "#dedede";
                document.body.style.color = "#121212";
                headingDiv.style.backgroundColor = "#a60000";
            } else if (theme === "dark") {
                alert("Finally, inner peace.");
                document.body.style.backgroundColor = "#121212";
                document.body.style.color = "#dedede";
                headingDiv.style.backgroundColor = "#a60000";
            } else if (theme === "tabularasa") {
                alert("John Locke.mp4");
                document.body.style.backgroundColor = "#121212";
                document.body.style.color = "#121212";
                headingDiv.style.backgroundColor = "#121212";
            } else if (theme === "void") {
                alert("Void");
                document.body.style.backgroundColor = "#dedede";
                document.body.style.color = "#dedede";
                headingDiv.style.backgroundColor = "#dedede";
            } else {
                alert("...");
            }
        }
        //Gives the button the onThemeButtonClick function.
        themeButton.addEventListener("click", onThemeButtonClick);
        //OTHER STUFF
        var convertButton = document.getElementById("convertButton");
        var output = document.getElementById("results");
        //function for convert
        var onConvertButtonClick = function() {
            var snackFrom = document.getElementById("snackFrom").value;
            var amount = document.getElementById("amount").value;
            var snackTo = document.getElementById("snackTo").value;
            if (snackFrom === "oreo" && snackTo === "takiTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt * 3;
                output.innerHTML = amountToInt + " Oreos are/is equal to " + newAmount + " Taki(s).";
            } else if (snackFrom === snackTo) {
                output.innerHTML = "Look, they are the same amount.";
            } else if (snackFrom === "oreo" && snackTo === "twinkieTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt/3;
                output.innerHTML = amountToInt + " Oreos are/is equal to " + newAmount + " Twinkie(s).";
            } else if (snackFrom === "oreo" && snackTo === "welchTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt * 5;
                output.innerHTML = amountToInt + " Oreos are/is equal to " + newAmount + " Welch's Fruit Gummies.(in packet/packets)";
            } else if (snackFrom === "taki" && snackTo === "oreoTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt / 3;
                output.innerHTML = amountToInt + " Takis(Fuego) are/is equal to " + newAmount + " Oreo(s).";
            } else if (snackFrom === "taki" && snackTo === "twinkieTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt * 8;
                output.innerHTML = amountToInt + " Takis(Fuego) are/is equal to " + newAmount + " Twinkie(s).";
            } else if (snackFrom === "taki" && snackTo === "welchTo") {
                var amountToInt = parseInt(amount);
                var newAmount = amountToInt * 15;
                output.innerHTML = amountToInt + " Takis(Fuego) are/is equal to " + newAmount + " Welch's Fruit Gummies.(in packet/packets)";
            } else if (snackFrom === "twinkie" && snackTo === "welchTo") {
                var amountToInt = parseInt(amount);
                output.innerHTML = amountToInt + " Twinkies are/is equal to " + newAmount + " Welch's Fruit Gummies.(in packet/packets)";
            } else {

            }
        }

        convertButton.addEventListener("click", onConvertButtonClick);
