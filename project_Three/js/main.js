let audio = null;




document.addEventListener("keypress", function(event) {
    let keysPiano = ["A", "S", "D","F","G","H","J","W",
        "E","T","Y","U", "a", "s", "d","f","g","h","j","w","e","t","y","u"];
    if (keysPiano.includes(event.key)) {
        console.log("The '" + event.key + "' key is pressed.");
        audio = new Audio("./sounds/"+event.key +".mp3")
        audio.play();
    }
    else {
        console.log("Please press the keys shown on the keyboard")

    }
});



