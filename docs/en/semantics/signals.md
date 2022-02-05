## Signals

In ViKiD, variables and function parameters are `signals`.

Intuitively, a `signal` is a value that changes over time. The signal might not be `ready` yet, then it is `pending` aka `uninitialized`. E.g. the result of an exam is not known before it is graded; the result is `pending`.

Mathematically, a `signal` is a sequence of `(Value,Timestamp)` pairs, written as `V @ T`.
The first pair is always `pending = ⊥ @ 0`, where `⊥` means `undefined`.
The timestamp of all other pairs is monotonically increasing.

```pseudo
signal = [ ⊥ @ 0, V1 @ T1, V2 @ T2, ... ] where ∀ i > 0: Ti > 0 and Ti > T(i-1)
```

Sampling a signal `at` a timestamp `Ts` returns the pair `Vi @ Ti` closest to `Ts`, so no other `Vj @ Tj` exists in the signal between `Ti` and `Ts`:

```pseudo
signal.at(Ts) = Vi @ Ti where ¬ Ǝ Vj @ Tj ∈ signal: Ti ≤ Tj ≤ Ts
```

Since writing out the full infinite sequence of a signal is impractical, so we describe the behavior of a signal using the `at` operator.

For example, all constants in ViKiD have the following signal:

```pseudo
constant(value).at(Ts) = value @ 1
```

The time signal is sampled automatically at the refresh rate of your monitor by ViKiD, typically 60hz:

```pseudo
time.at(Ts) = Ts * 1/60 @ Ts
```

(Unfortunately this is not exactly 60hz, so this varies)

## Combining signals

Every expression in ViKiD combines various signals into new ones, using signal functions.

Non-reactive programming languages (like C, C++, C#, Python, Javascript, etc) don't use signals but imperative variables. For example, suppose we keep a `highscore` and want to increment a `score` when an event named `kaboom` happens. This is written as follows in C# (other languages even don't have builtin support for events):

```pseudo
score = 0;
highscore = 0;

kaboom += delegate {
   score = score + 1;
   highscore = Math.Max(score, highscore);
};
```

Not only is this very verbose, it has many problems:
- the event handler (delegate) must be removed at some point from the kaboom event, otherwise you get a memory leak.
- code that depends on the score must be called explicitly, since changing a variable does not cause other variables that use score to be updated automatically. In this example, we are updating the high score. But we might also need to repaint the score, or give an extra live to the player when the score exceeds some threshold...

Explicitly calling other code that depends on score being incremented is error prone, since other parts of the code could change score too.

To solve this in C#, score is often changed into an observable property, that has its own event, e.g. scoredChanged. Dependent code can then just observe the score, and act upon changes, just like we reacted on the kaboom event. However this now means that changing the score suddenly changes many other variables in the system, in an undetermined order, making it impossible to reason about what is happening... Furthermore this can introduce infinite loops when two variables depend on each other!

## Spreadsheets

If you ever programmed a spread sheet, you will have noticed that all cells automatically update. This reactive behavior can be used for much more than spreadsheets, and solves all of the problems above!

Let us code the same thing in ViKiD pseudo code

```pseudo
score = 0 ⊕ (score + 1).when(kaboom)
highscore = 0 ⊕ score.max(highscore)
```
(the ⊕ symbol stands for `merge`)

That's it. Read this as follows:

```pseudo
score starts with the value 0, and is incremented when kaboom happens.
highscore also starts at 0, and is the maximum score. 
```

Just like a spreadsheet, ViKiD will automatically keep all signal values and timestamps synchronized in the correct order, and manage event handler memory for you.

Mathematically however, score and highscore are signals, so semantically:

```pseudo
score.at(t) = 0 ⊕ (score.at(t-1) + 1).when(kaboom.at(t))
highscore.at(t) = 0 ⊕ score.at(t).max(highscore.at(t-1))
```

Since both score and highscore depend on their own values, we have to sample their previous value, otherwise we would be stuck in an infinite loop. todo update flashes, red circle, feedback loops.





