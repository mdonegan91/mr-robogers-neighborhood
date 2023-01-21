
// Utility

function robogerIntegerId1(input) {
    const integer = input.toString();
    if (integer === "1") {
        return true;
    } else {
        return false;
    }
}

function robogerIntegerId2(input) {
    const integer = input.toString();
    if (integer === "2") {
        return true;
    } else {
        return false;
    }
}

function robogerIntegerId3(input) {
    const integer = input.toString();
    if (integer === "3") {
        return true;
    } else {
        return false;
    }
}

//Business Logic

function loopToNumber(num) {
    let output = "";
    for (let i = 0; i <= num; i++) {
        output += i + " ";
    }
    return output;
}

function robogerId(input) {
    const userInput = input.toString().split("");
    let userOutput = [];
    userInput.forEach(function (integer) {
        if (robogerIntegerId1(integer)) {
            userOutput.push("Beep!");
        }
        if (robogerIntegerId2(integer)) {
            userOutput.push("Boop!");
        }
        if (robogerIntegerId3(integer)) {
            userOutput.push("Won't you be my neighbor?");
        } else {
            return userOutput;
        }
    });
    return userOutput;
}

// UI Logic

