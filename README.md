# Node.js calculator
A CLI calculator made in node.js

---

### Why should I use this calculator? Why not just use forth or whatever?
#### Forth is a different thing
This calculator is *NOT FORTH* this calculator is just similar to forth in a few ways.

This calculator is useful for things like averages, addition, multiplication and other operations (like mode) on a set of numbers. It was primarily created for standard deviations and other useful operations.

Currently it doesn't have all that I want. I will be frequently adding uses and applications that will be useful to students in engineering and hopefully computer science too.

This calculator is not based on forth, but after learning what forth is I realized it had a very similar style.

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

This project is similar to the FORTH programming language

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
(capitalization doesn't matter)

| Command     | Use                                            | Shortcut
|-------------|------------------------------------------------|---------
| `ADD`       | Adds all numbers together                      | `+`
| `PRODUCT`   | Multiplies all numbers together                | `*`
| `ADDLAST`   | Adds the last 2 numbers together               | `+L`
| `TIMESLAST` | Multiplies last 2 numbers together             | `*L`
| `SQRT`      | Square roots the last number                   | `SR`
| `INCREMENT` | Increments the last number (by 1)              | `++`
| `INCALL`    | Increment all numbers by 1                     | `++A`
| `AVERAGE`   | Takes the average of all the numbers           | `AV`
| `MODE`      | Get the most common value, if none, -1         | `MO`
| `RANGE`     | Get the difference between max and min in set  | `RA`
| `MAXIMUM`   | Get the max value in the set                   | `MAX`
| `MINIMUM`   | Get the min value in the sat                   | `MIN`
| `ADDBY`     | Add all numbers by the newest number           | `AB`
| `MULTIBY`   | Multiply all numbers my newest number          | `MB`
| `SORT`      | Sorts numbers from low to high                 | `L`
| `TROS`      | Sorts numbers from high to low                 | `H`
| `ENGINEER`  | Puts all numbers in engineering notation       | `EN`
| `RANDOM`    | Inset a random 1 or a random 0                 | `RAND`
| `NEWTOOLD`  | Move the newest to the oldest                  | `NTO`
| `OLDTONEW`  | Move the oldest to the newest                  | `OTN`
| `DELETE`    | Deletes last element in the array              | `DEL`
| `CLEAR`     | Clear all entries                              | `CL`
| `EXIT`      | Leaves the program                             | `E`

### TODO
Add larger numbers, maybe. Currently this project used the basic `var` to create variables.

### Bugs
If you find any buys report them by [email](mailto:alexandersonone@gmail.com)
