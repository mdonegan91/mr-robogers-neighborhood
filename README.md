<!-- Describe: robogerInteger

Test: "It should recognize the action integers (1, 2, 3)."
Code: 
    robogerInteger(3)
Expected Output: true -->


Describe: robogerIntegerId1

Test: "It should recognize action integer 1"
Code: robogerIntegerId1(1)
Expected output: true


Describe: robogerIntegerId3

Test: "It should recognize action integer 2"
Code: robogerIntegerId2(2)
Expected output: true


Describe: robogerIntegerId3

Test: "It should recognize action integer 3"
Code: robogerIntegerId1(3)
Expected output: true


<!-- Describe: robogerIntegerId

Test: "It should recognize all instances of an action integer in a number."
Code:
    robogerIntegerId(25)
Expected output: true, false -->

<!-- Describe: robogerId1

Test: "It should recognize all instances of action integer 1 in a number."
Code:
    robogerIntegerId(14)
Expected output: true, false

Describe: robogerId2

Test: "It should recognize all instances of action integer 2 in a number."
Code:
    robogerIntegerId(24)
Expected output: true, false

Describe: robogerId3

Test: "It should recognize all instances of an action integer 3 in a number."
Code:
    robogerIntegerId(53)
Expected output: false, true -->


Describe: loopToNumber(num) 

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: loopToNumber(6)
Expected output: [0, 1, 2, 3, 4, 5, 6]


Describe: robogerId

Test: "For numbers containing an action integer 1, it should replace the entire number with 'Beep!'"
Code: robogerId1(14)
Expected output: 'Beep!'

Test: "For numbers containing action integer 2, it should replace the entire number with 'Boop!'"
Code: robogerId(25)
Expected output: 'Boop!'

Test: "For numbers containing action integer 3, it should replace the entire number with 'Won't you be my neighbor?'"
Code: robogerId(35)
Expected output: "Won't you be my neighbor?"


