## Bugs:
* you can't click again on all the checkboxes 

## Main Issues:
1. nested ifs - use: (if(!x) return), && ||, make your ifs as much specific as you can
1. instead of many loops, use array methods to make your code cleaner.
1. undefined vs null vs void - `lines 20-21`

* improve the conditions at the onClick function - simple necessary checks + move it inside **setAvengersArray**
* the names of the constants are bad - avoid using numbers and single letters
* x.length > 0 => just check if (x.length)
* unnecessary variable - `line 28`
* do not repeat interfaces and do not  write them inside the code  - `line 12`
* the const **AvengersInfo** isn't at the right format
* there is no key to the map - `line 73`
* delete all the code in comment + console.logs