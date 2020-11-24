# Simple calculator using MathJS

## What
A very basic calculator that concats input from key clicks and evaluates using the MathJS library. 
Notebook paper using pure CSS because it's fun.

## Why
To keep React practice up while working at a place that is all and only jQuery (in 2020!). By using the MathJS libaray and not keeping track of  prev and curr inputs in state, I can focus on just passing props, styling, and — in 2020 — keeping it simple while chaos abounds.

## What I don't like
This evaluates a string of inputs. Pressing the keys just concatenates, and .. or */.. will crash it. I chose a simple and not perfect solution to compare the value of the click with the last item in the input string. If neither evaluate as a number using isNan(), then the function just returns. This works for .., .*, *+, etc, but it won't help for situations like "2.3.1".

After much gnashing of teeth, I've decided that this is a simple calc. SIMPLE. I believe to handle the situation above, there'd need to be a set of functions that handle the operations separately, and keeps previous and current entries in separate states.

That, my friends, is another project.

## Tools:
* ReactJS / Create React App ... or CRApp
* MathJS
* Styled Components
* [Color palette from Coolors](https://coolors.co/086788-07a0c3-f0c808-fff1d0-dd1c1a)
