# Node.js calculator
A CLI calculator made in node.js

---

### Setting up
To get started, clone the repo, cd to it, and type `make` in a terminal
Please note that you need node.js installed.

If you don't have GNU/Make, you can use `node app.js`

---

### Using
Currently, this calculator has several uses.
To enter number, just type a number and hit enter, to ender a command,
just enter the word of the command.

This project is similar to the FOURTH programming language

Examples
```
  :5
  [ '5' ]
:5
  [ '5', '5' ]
:10
  [ '5', '5', '10' ]
:average
  [ '6.6666666667' ]
:clear
  []
:5
  [ '5' ]
:6
  [ '5', '6' ]
:7
  [ '5', '6', '7' ]
:add
  [ '18' ]
```

---


### Current commands
(Letter case doesn't matter)

| Command | Use                                  | Shortcut
|---------|--------------------------------------|
| ADD     | Adds all numbers together            | +
| PRODUCT | Multiplies all numbers together      | *
| ADDLAST | Adds the last 2 numbers together     | +l
| AVERAGE | Takes the average of all the numbers | AV
| SORTL   | Sorts numbers from low to high       | L
| DELETE  | Deletes last element in the array    | DEL
| EXIT    | Leaves the program                   | E
