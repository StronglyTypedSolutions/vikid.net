> NOTE: The following text is very technical and advanced, and describes exact mathematical semantics for ViKiD. If this is too hard, please play our puzzle game or watch the community's Youtube tutorials. Learning is mostly done by playing and experimenting, until you develop an intuition.

## Signals everywhere

In ViKiD, variables and function parameters are `signals`.

Intuitively, a `signal` is a value that changes over time, like the mouse position. The signal might not be `ready` yet, then it is `pending` aka `uninitialized`. E.g. the result of an exam is not known before it is graded; the result is `pending`.

> For easier reasoning, ViKiD uses natural `time-stamp` numbers instead of real `time` numbers. In animation, this is also known as `frame numbers`. 

Mathematically, a `signal` is a sequence of `(Value,Timestamp)` pairs, written as `V @ T`. The first pair is always `pending := ⊥ @ 0`, where `⊥` means `undefined`. The timestamp of all other pairs is _monotonically increasing_. `Timestamps` in ViKiD start at `1`, with `0` reserved for  `pending`:

```pseudo
signal = { ⊥ @ 0, V1 @ T1, V2 @ T2, ... } where ∀ i > 0 : Ti > 0 and Ti > T(i-1)
```

> For performance reasons, ViKiD's implementation is not mathematical. ViKiD just stores the __most recent__ `value` and `timestamp` of a `signal` into a __hidden mutable variable__, that is __encapsulated__ from the programmer. The `timestamps` can be visualized by clicking the __clock__ in the debug toolbar. For an ultimate debugging experience, premium members can __rewind__ their simulation in time!

## Sampling signals

Conceptually, sampling a signal `at` a timestamp `Ts` returns the pair `Vi @ Ti` closest to `Ts`, i.e. no other `Vj @ Tj` exists in the signal between `Ti` and `Ts`:

```pseudo
signal.at(Ts) = Vi @ Ti where ¬Ǝ (Vj @ Tj ∈ signal: Ti ≤ Tj ≤ Ts)
```

> Practically - since we cannot do time-travel outside of mathematics yet - sampling a `signal` just gives you the __most recent__ `(Value, Timestamp)`. 

Since writing out the full infinite sequence of a `signal` is impractical, we describe the semantics of a `signal` using the `at` operator.

For example, the semantics of a `constant signal` with value `42` are:

```pseudo
constant(42).at(Ts) = 42 @ 1
```

`time` itself is also a `signal`. It is sampled automatically at the _refresh rate_ of your monitor by ViKiD, typically 60hz:

```pseudo
time.at(Ts) = Ts * 1/60 @ Ts
```

> Unfortunately this is not exactly 60hz, so this varies. Also, some monitors have much higher refresh rates, so you should never rely on 60Hz! 
## Combining signals

Every expression in ViKiD combines various `signals` into new ones, using `signal functions`.

Non-reactive programming languages (like C, C++, C#, Python, Javascript, etc) don't use signals but __mutable variables__. For example, suppose we keep a `highscore` and want to increment a `score` when an event named `kaboom` happens. This is written as follows in C# (other languages even don't have builtin support for events):

> If you don't know these programming languages, feel free to skip ahead to the [spreadsheets](#spreadsheets) section


```C#
public class Example
{
    public int UserScore { get; private set; }
    public int HighScore { get; private set; }

    public event Action Kaboom;

    public Example()
    {
        UserScore = 0;
        HighScore = 0;

        Kaboom += delegate
        {
            UserScore = UserScore + 1;
            HighScore = Math.Max(HighScore, UserScore);
        };
    }

    public void RaiseKaboom()
    {
        Kaboom?.Invoke();
    }
}
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





