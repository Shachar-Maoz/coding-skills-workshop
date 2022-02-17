## Bugs:
* when clicking on the checkbox while the button is on 'unfinished' mode, its changes its mode only when we go back to the full list
* when you check the first book as finished and click on the button, the book number doesn't match the right number

## Main Issues:
1. get rid of the **filteredBooks** state - use useMemo instead
1. use loops to make your code more efficient - `line 65`

* add try-catch
* the render for both parts is exactly the same
* nested & simple destructuring - `lines 30-32 & 44-48`
* do not add Partial to interface with question marks - **Partial<book>**
* change **object** to the **chapter** interface - `line 7`
* explain the usage of ! - `line 79, 93`
* change from || to ?? - `line 43`
* if the key and the variable had the same name inside object, you can just pass the key name - `lines 47-48`
* change: prop={true} => prop - `lines 79, 93`
* change && few times to ?. - `lines 83, 97`
* problem with passing the index as the key - make sure it is unique


## Checkbox:
* don't use **Function**, use more specific type
* change **onClick && onClick()** to **onClick?.()**