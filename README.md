# Burrito Code Challenge

Legal Pete's needs somebody to program the "Take a Number" feature for their counter.

At the beginning of the day, Pete's is empty and is represented by an empty array, like `const burritoLine = [];`. 

### Challenge 1
Build a function that a new customer will use when entering Pete's. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Tash. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

### Challenge 2
Build a function `nowServing`. This function should accept the current line of people (`burritoLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

### Challenge 3
Build a function currentLine that accepts the current line of people and returns the current line as a string; for example, if `burritoLine` is currently `["Tash", "Grace"]`, `currentLine(katzDeliLine)` would return "The line is currently: 1. Tash, 2. Grace". You don't have to use `burritoLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return "The line is currently empty."

# IMPORTANT 

## Code Challenge set up:
Clone this repository down to your local machine.
CD into the challenge from your terminal.
Once you are in the appropriate directory, run `git checkout -b jacobs-branch`
Then, run `code .` to open up your text editor. 
Make a commit after each challenge is complete by running the following commands in your terminal (make sure you are in the right directory and on your appropriate branch):
`git add .` => this will set up all your code for pushing
`git commit -m "type out which challenge is complete in this message"` => this gives a message for which challenge you are commiting.
`git push` pushes your code up to github!


### Examples and tests
Use the following examples, as well as tests you build on your own, to make sure your code is working. Set a timer, and try to complete this challenge in 60 minutes.

```
const burritoLine = [];

takeANumber(burritoLine, "Tash"); // "Welcome, Tash. You are number 1 in line."
takeANumber(burritoLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(burritoLine, "Aidan"); // "Welcome, Aidan. You are number 3 in line."

currentLine(burritoLine); // "The line is currently: 1. Tash, 2. Grace, 3. Aidan"

nowServing(burritoLine); // "Currently serving Tash."

currentLine(burritoLine); // "The line is currently: 1. Grace, 2. Aidan"

takeANumber(burritoLine, "Chuck"); // "Welcome, Chuck. You are number 3 in line."

currentLine(burritoLine); // "The line is currently: 1. Grace, 2. Aidan, 3. Chuck"

nowServing(burritoLine); // "Currently serving Grace."

currentLine(burritoLine); // "The line is currently: 1. Grace, 2. Aidan"
```