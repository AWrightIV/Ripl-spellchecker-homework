# Details on my version

This implementation with TypeScript is intended to demonstrate adherence to SOLID principles, readability, and 100% test coverage. It corrects all the cases listed and all permutations of them. The entire time I was developing, I relied on jest to determine whether my code met the requirements. To see my code running the way that I did, run "npm run test" or "yarn test."

# Original Problem Description

# Ripl Spell-checker

To complete the new Ripl spell-checking software, we need you to create its brain. The requirements for this version are listed below. If you have any questions about any part of the task, please let us know.

### Requirements

Using a language of your choice, write a function that implements the following pseudo-code signature:

`String checkWord( String wordToCheck )`

The function should behave as follows:
* It will correct two kinds of errors on the incoming word and then return the corrected word:
    * It fixes bad casing.
        * “wetumpka” → “Wetumpka”
        * “paRNAssus” → “Parnassus”
    * It removes invalid repeating characters.
        * “tabble” → “table”
        * “rrreally” → “really”
* If the incoming word is already correct, the function should return the original word.
* If the incoming word is not correct and no correction can be found, the function should return the string “No Correction Found”.

The list of correct word spellings are in the dictionary file that is in this repo. (Uncompress the file before using it.) You don't need to perform corrections on any words not in this dictionary.

If you have any questions, please let us know.

### Packaging and Delivery

Please send the source code in a ZIP file, or similar format. If you use any libraries, please ensure we can get the exact versions you used. Please tell us anything that you think we should know about compiling or using your code.
