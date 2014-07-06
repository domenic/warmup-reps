## `sets(setWeights, options)`

`options.barWeight`: defaults to `45`
`options.plates`: defaults to `[2.5, 5, 10, 25, 35, 45]`
`options.wiggleRoom`: defaults to `0`. (This will be a later feature.)

`sets([95, 125, 210, 175])` gives back something like `[[25], [35, 5], ...]`

## `breakdowns(setWeight, options)`

Same options.

So it gives the plates on one side.

A weightlifter has a certain sequence of weights he wants to lift.  For example 95, 125, 210, and then 175 (the units can be lbs or kgs; obviously it doesn't matter).  Weights come in the following denominations: 2.5, 5, 10, 25, 35, and 45.  Assume there is an unlimited supply of each denomination.

The weightlifter above needs to make a stack of weights totaling 95.  Then he needs to change the stack to make 125, followed by 210 and finally 175.  The weightlifter wants to minimize the total number of steps required to make each of these weights. We count one "step" every time we either add or remove a weight from the top of the stack. (We can only add or remove weight from the top of the stack.)

Suppose we start with an empty weight stack. Given a sequence of weights to create, how can we determine the minimum number of steps needed to hit all weights in the sequence?

```js
// for later

var exercises = ["Squats", "Bench Press", "Overhead Press", "Barbell Rows", "Deadlift"];

// Rules from SL 5x5:
// - Initially, 1 squat at 0 lbs, nothing for others
// - Once you can lift 66 lbs/30 kg, do warmups
//   - 2x45 lbs
//   - switch to sets of 3 reps, adding 25-45 lbs per set until you're at your work weight
// - Examples have 2 reps when getting close to work weight (namely 25 lbs away)
// - Deadlifts have sets of 5 for all
```
