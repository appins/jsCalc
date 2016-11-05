# Node.js calculator
A CLI calculator made in node.js

---

### Why should I use this calculator? Why not just use forth or whatever?
#### Forth is a different thing
This calculator is *NOT FORTH* this calculator is just similar to forth in a few ways.

This calculator is useful for things like averages, addition, multiplication and other operations (like mode) on a set of numbers. It was primarily created for standard deviations and other useful operations.

Currently it doesn't have all that I want. I will be frequently adding uses and applications that will be useful to
students in engineering and hopefully computer science too.

This calculator is not based on forth, but after learning what forth is I realized it had a very similar style.

---

### Setting up
To get started, clone the repo, cd to it, and type `make` in a terminal
Please note that you need node.js installed.

If you don't have GNU/Make, you can use `node app.js`

##### Easy guide for newcomers
  1. Go to the github page for this project (you're already there)
  2. Click "Clone or download"
  3. Click "Download zip"
  4. Get node if you don't already have it. Available [here](https://nodejs.org/en/)
  5. Open the zip file and drag jsCalc-master to your desktop
  6. Open CMD (Windows + X)
  7. Enter these commands

  ```
    cd Desktop
    cd jsCalc-master
    node main.js
  ```

---

### Using
Currently, this calculator has several uses.
To enter number, just type a number and hit enter, to enter a command,
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
:clear
  []
:20 30 10 add
  [ '60' ]
```

---


### Current commands
(capitalization doesn't matter)

Separating numbers and commands with spaces (like `10 30 20 add`) works too now.

Unfortunately, this doesn't work with commands.

#### Normal commands
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
| `MULTIBY`   | Multiply all numbers by newest number          | `MB`
| `SORT`      | Sorts numbers from low to high                 | `L`
| `TROS`      | Sorts numbers from high to low                 | `H`
| `ENGINEER`  | Puts all numbers in engineering notation       | `EN`
| `RANDOM`    | Inset a random 1 or a random 0                 | `RAND`
| `NEWTOOLD`  | Move the newest to the oldest                  | `NTO`
| `OLDTONEW`  | Move the oldest to the newest                  | `OTN`
| `REVERSE`   | Reverse the array                              | `REV`
| `DUPLICATE` | Append the whole array to the end              | `DUPE`
| `FIX`       | Removes all errors from the array, like strings| N/A
| `DELETE`    | Deletes last element in the array              | `DEL`
| `CLEAR`     | Clear all entries                              | `CL`
| `EXIT`      | Leaves the program                             | `E`

#### Engineering commands (all engineering commands start with `%`)
| Command     | Use                                                 | Shortcut
|-------------|-----------------------------------------------------|---------
| `%`         | Find engineering notation of a number.              | N/A
| `%SERIES`   | A series circuit: Oldest value is voltage and everything else is resistance in ohms | `%SC`
| `%PARALLEL` | Same as series, but with a parallel circuit instead | `%PL`
| `%COMP`     | Divide every value in the array by the max          | `%C`

#### Additional math commands
| Command      | Use                                                   | Shortcut
|--------------|-------------------------------------------------------|----------
| `DIVIDE`     | Divide the most recent 2 values (2nd newest / newest) | `/`
| `MINUS`      | Subtract the most recent 2 values, works just like divide | `-`
| `SWITCH`     | Switch the newest two values around                   | `S`
| `OVERWHOLE`  | Divide every number over the whole val1 / (val1+val2) | `OW`
| `EXPONENT`   | Raise second newest number to newest number           | `**` or `^`
| `MULTI2`     | Multiply each pair of numbers together                | `*2`
| `MODULO`     | Preform the second newest number mod the newest       | `MOD`

#### Programming based commands
| Command         | Use                                                   | Shortcut
|-----------------|-------------------------------------------------------|---------
| `$STRING:...`   | Convert a string (marked by the `...`) into char codes and insert it as the end of the array. (e.g. `$S:Hello`) | `$S:...`
| `$BINARY:...`   | Convert a binary string to a number that is appended at the end of the array | `$BIN:...`

### Bugs
If you find any buys please report them by [email](mailto:alexandersonone@gmail.com)
