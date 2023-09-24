# calculator
Final project from The Odin Project's foundations course.

Operation logic pseudocode:

From buttons forEach section, user clicks on number and sets first operand.

After that, user clicks on any of operation symbols (addition/subtraction/division/multiplication),
and first operand is captured in a variable called 'firstNum'.

After operator symbol is chosen, it will be stored in a variable called 'operator' and sent to addition function along with
'firstNum'.

User then needs to select another number (or numbers) and then this is captured in a variable called 'secondNum'.

When the user clicks the 'Equals' sign, the 'secondNum' is captured and sent to addition function to complete the addition
operation. 

Addition function will return the sum of 'firstNum' and 'secondNum' to display on the 'totalDisplay' display.

Operations display will update and show the sum of 'firstNum' and 'secondNum'.
