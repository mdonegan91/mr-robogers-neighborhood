Describe: robogerInteger

<!-- Test: "It should recognize the action integers (1, 3, 5)."
Code: 
    const input = 3
    robogerInteger(input)
Expected Output: true -->

Describe: robogerIntegerId1

Test: "It should recognize action integer 1"
Code:
    const input = 1
    robogerIntegerId1(input)
Expected output: true

Describe: robogerIntegerId3

Test: "It should recognize action integer 3"
Code:
    const input = 3
    robogerIntegerId1(input)
Expected output: true

Describe: robogerIntegerId5

Test: "It should recognize action integer 5"
Code:
    const input = 5
    robogerIntegerId1(input)
Expected output: true

<!-- Describe: robogerIntegerId

Test: "It should recognize all instances of an action integer in a number."
Code:
    const input = 25
    robogerIntegerId(input)
Expected output: false, true -->

Describe: robogerId1

Test: "It should recognize all instances of action integer 1 in a number."
Code:
    const input = 14
    robogerIntegerId(input)
Expected output: true, false

Describe: robogerId3

Test: "It should recognize all instances of action integer 3 in a number."
Code:
    const input = 23
    robogerIntegerId(input)
Expected output: false, true

Describe: robogerId5

Test: "It should recognize all instances of an action integer 5 in a number."
Code:
    const input = 25
    robogerIntegerId(input)
Expected output: false, true




Describe: robogerReplace1

Test: "For numbers containing action integer 1, it should replace the entire number with 'Beep!'"
Code:
    const input = 14
    robogerReplace1(input)
Expected output: 'Beep!'

Describe: robogerReplace3

Test: "For numbers containing action integer 3, it should replace the entire number with 'Boop!'"
Code:
    const input = 23
    robogerReplace3(input)
Expected output: 'Boop!'

Describe: robogerReplace5

Test: "For numbers containing action integer 5, it should replace the entire number with 'Won't you be my neighbor?'"
Code:
    const input = 25
    robogerReplace5(input)
Expected output: "Won't you be my neighbor?"



Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should..." // this is the start of 2nd test for beepBoop()