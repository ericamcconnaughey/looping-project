# _Looping Project_

#### _This application uses JS loops, 12.09.2019_

#### By _**Erica McConnaughey**_

## Description

_This application takes an input number and will return a message to the user depending on what number it was. Essentially, all numbers from 0 to the input number will be displayed in the output; however, some numbers will be replaced with other words. Any number with a 3 will be replaced with "I'm sorry, Dave. I'm afraid I can't do that." Any number with a 2 will be replaced with "Boop!" And any number with a 1 will be replaced with "Beep!" 2 takes precendence over 1, and 3 takes precedence over 2._

| Behavior  |  Input Example | Output Example  |
|---|---|---|
| a number without 1, 2, or 3  | 4  | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4  |
| a number with 1 | 10 | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!  |
| a number with 2  | 2  | 0, Beep!, Boop!  |
| a number with 3  | 3  | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that.  |
| a number with 1 & 2  | 12  | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!  |
| a number with 1 & 3  | 13  | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that.  |
| a number with 2 & 3  | 23  | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that.  |

## Setup/Installation Requirements

* _Download this repo._
* _Open index.html with a web browser._
* _Input a number and click submit to see the answer._

## Known Bugs

_Unknown at this time._

## Support and contact details

_Email ericamcconnaughey@gmail.com with any comments, bugs, or suggestions._

## Technologies Used

_JavaScript, Bootstrap, jQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Erica McConnaughey_**