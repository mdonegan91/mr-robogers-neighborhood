window.onload = function () {
    const form = document.querySelector("form#main-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //Utility

        // function robogerInteger(input) {
        //     const integer = input.toString().split("");
        //     if (integer === "1" || integer === "3" || integer === "5") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

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

        // function robogerIntegerId(input) {
        //     const userInput = input.toString().split("");
        //     const inputArray = [];
        //     userInput.forEach(function (integer) {
        //         if (robogerInteger(integer)) {
        //             inputArray.push(true);
        //         } else {
        //             inputArray.push(false);
        //         }
        //     });
        //     return inputArray;
        // }

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

        function generateList() {
            let num = document.getElementById("num").value;
            let list = "";
            for (var i = 0; i <= num; i++) {
                list += i + " ";
            }
            document.getElementById("list").innerHTML = list;
        }

        // function robogerId3(input) {
        //     const userInput = input.toString().split("");
        //     const inputArray = [];
        //     userInput.forEach(function (integer) {
        //         if (robogerIntegerId3(integer)) {
        //             inputArray.push(true);
        //         } else {
        //             inputArray.push(false);
        //         }
        //     });
        //     return inputArray;
        // }

        // function robogerId5(input) {
        //     const userInput = input.toString().split("");
        //     const inputArray = [];
        //     userInput.forEach(function (integer) {
        //         if (robogerIntegerId5(integer)) {
        //             inputArray.push(true);
        //         } else {
        //             inputArray.push(false);
        //         }
        //     });
        //     return inputArray;
        // }

        function oneWordPigLatin(text) {
            let characterArray = text.toLowerCase().split("");
            let newWord = [];
            let newWord2;
            if (isVowel(firstLetter(text))) {
                newWord = appendAy(text);
                return newWord;
            } else if (isVowel(secondLetter(text))) {
                newWord = characterArray.shift()
                newWord2 = characterArray.join("");
                newWord2 = newWord2 + appendAy(firstLetter(text));
                return newWord2;
            } else if (isVowel(thirdLetter(text))) {
                newWord = characterArray.slice(2);
                newWord = newWord.join("");
                newWord2 = newWord + appendAy(firstLetter(text) + secondLetter(text));
                return newWord2;
            }
        }

        for (let i = 1; i <= 100; i += 1) {
            if (i === 1) {
                console.log("Beep!");
            } else if (i === 2) {
                console.log("Boop!");
            } else if (i === 3) {
                console.log("Won't you be my neighbor?");
            } else {
                console.log(i);
            }
        }

        // UI Logic

        document.getElementById("output").innerText = result;
    });
}