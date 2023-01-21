//Business Logic

function robogerMessage(input) {
    const loopToNumber = [];
    let userOutput = [];
    for (let i = 0; i <= input; i++) {
        loopToNumber.push(i.toString())
    }
    loopToNumber.forEach(function (number) {
        if (number.includes("3")) {
            userOutput.push("won't you be my neighbor?")
        }
        else if (number.includes("2")) {
            userOutput.push("boop!")
        } else if (number.includes("1")) {
            userOutput.push("beep!")
        }
        else {
            userOutput.push(number);
        }
    })
    return userOutput;
}

// UI Logic

function handleMrRoboger(event) {
    event.preventDefault();
    let input = parseInt(document.getElementById("inputNumber").value);
    let output;
    if (input >= 0) {
        output = robogerMessage(input);
        output = output.join(" ");
    };
    document.getElementById("result").innerText = output;
}

window.addEventListener("load", function () {
    const form = document.getElementById("userInput");
    form.addEventListener("submit", handleMrRoboger)
})