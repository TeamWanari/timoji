# timoji

[![Build Status](https://img.shields.io/travis/TeamWanari/timoji.svg?style=flat-square)](https://travis-ci.org/TeamWanari/timoji)
[![npm version](https://img.shields.io/npm/v/@wanari/timoji.svg?style=flat-square)](https://www.npmjs.com/package/@wanari/timoji)
[![coverage](https://img.shields.io/codecov/c/github/TeamWanari/timoji.svg?style=flat-square)](https://codecov.io/gh/TeamWanari/timoji)

The emoji time library you ever wanted!

### How to use:
```
var timoji = require('timoji');
timoji.format(new Date('Jan 01, 2000 01:00:00')); //🕐↘️0⃣🌜
timoji.format(new Date('Jan 01, 2000 04:32:22')); //🕟↖️2⃣🌜
timoji.format(new Date('Jan 01, 2000 14:47:55')); //🕒↪️3⃣🌞
```
### How to read?

Char-by-char:
 - The first character is the clock-face, it defines a starting point.
 - The second character is the arrow which will mutate the minute-hand on the clock-face.
 - The third character is a number; "how much we mutate the minutes in the given direction?"
 - The fourth is refers the part of the day (day/night)

#### Comming soon

 - parse back
 - more flexible formatter (like 'CAMD' vs 'DCAM')
 - option to less characters if possible
 - option to fix char-length and use rounding
 - use string/number/date as input and not just date
 - use other emojis (dicetime?)
 - tested on multiple environments

#### Why?

This is a fun lib, exercising TDD (and learning the js ecosystem), but in this emoji filled world maybe this is the lib you really missed!

The idea sponsored by long builds, and boredom! 
