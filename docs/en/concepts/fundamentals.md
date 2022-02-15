# Fundamentals

> NOTE: The following text is __rather technical and advanced__, and describes the exact mathematical semantics for ViKiD. If this is too hard, please just __skim over it__, replacing all words you don't understand with ___yadi yadi yadi___ 😉. But make sure to play our __puzzle game__ and watch __the community's Youtube tutorials__ to get the basics. Learning is mostly done by __playing and experimenting__, until you develop __intuition__ about the matter.

## Signals everywhere

In ViKiD, variables and function parameters are `signals`.

Intuitively, a `signal` is a value that changes over `time`, like the `mouse position`. A signal might not be `ready` yet, then it is `pending` aka `uninitialized`. E.g. the result of an exam is not known before it is graded; the result is `pending`.

> For easier reasoning, ViKiD uses natural `time-stamp` numbers instead of real `time` numbers. In animation, this is also known as `frame numbers`. 

Mathematically, a `signal` is a __sequence__ of `(Value,Timestamp)` pairs (also called `samples`), written as `V @ T`. The first pair is always `pending := ⊥ @ 0`, where `⊥` means `undefined`. The timestamps of all other pairs are _monotonically increasing_. `Timestamps` in ViKiD start at `1`, with `0` reserved for  `pending`:

```pseudo
signal = { ⊥ @ 0, V1 @ T1, V2 @ T2, ... } where ∀ i > 0 : Ti > 0 and Ti > T(i-1)
```

> For performance reasons, ViKiD's implementation is not mathematical. ViKiD just stores the __most recent__ `value` and `timestamp` of a `signal` into a __hidden mutable variable__, that is __encapsulated__ from the programmer. The `timestamps` can be visualized by clicking the __clock__ in the debug toolbar. You can also __rewind__ your simulation in time, to investigate  past updates!

## Language syntax

In ViKiD, we use the __object-oriented__ syntax when applying functions, also called __methods__.

So instead of the _mathematical_ way of writing 

```pseudo
pow(sin(time),4)
```

we write

```pseudo
time.sin().pow(4)
```

> This form is used in most popular programming languages too.

So we start with the `subject` (aka `self` or `this`) followed by a `method application`, then the `verb`, then a (_possibly empty_) tuple of `parameters`. In ViKiD we call the subject the `input`. 

> We have chosen this asymmetric form because it matches the [subject-verb-object](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object) sentence structure used in most Western natural languages.

Especially when working with graphics, this works out nicely:

```pseudo
square.rotated(time).painted(red).under(circle).scaled(4)
```

> Note that we used the __simple past tense__ for the verbs here. Unlike most traditional programming languages, ViKiD is a __declarative language__: you describe what things __are__, and _not_ what to __do__. ViKiD has __no statement order__!

In ViKiD's block syntax:
```vikid-script
𝕍i𝕂i𝔻 v0.7-671-gf3ba72e28207 s21
{ ‘⌂’: {* a: ■.rotate(🕒).paintSolid(#FF0000).under(●).scale(«4») } }
```

Let's go over the buttons in the toolbar:
- The __clock__ icon shows the `time` since the simulation has been running
- Clicking the __clock__ icon will reveal the `time-stamps` of all signals.
- The `$enterFullscreen` button allows opening the script in the playground editor.
- The `$restart`, `$stop`, `$pause`, `$play` buttons __restart__, __stop__, __pause__ and __resume__ the simulation.
- The `$step`, `$rewind` buttons __step forwards__ and __backwards__ one frame.
  - Long pressing the button will speed this up.

## Sampling signals

Conceptually, __sampling__ a signal `at` a timestamp `T` returns the pair `Vi @ Ti` closest to `T`, i.e. no other `Vj @ Tj` exists in the signal between `Ti` and `T`:

```pseudo
signal.at(T) = Vi @ Ti where ¬∃ (Vj @ Tj ∈ signal: Ti ≤ Tj ≤ T)
```

> Practically - since we cannot do time-travel outside of mathematics yet 😉 - sampling a `signal` just gives you the __most recent__ `(Value, Timestamp)`. When a `signal` gets a new `(Value, Timestamp)`, we say the `signal` __updates__.

Since writing out the full infinite sequence of a `signal` is impractical, we describe the semantics of a `signal` using the `at` operator.

For example, the semantic of a `constant signal` with value `42` is:

```pseudo
constant(42).at(T) = 42 @ 1
```

`time` itself is also a `signal`. It is sampled automatically at the _refresh rate_ of your monitor by ViKiD, typically 60hz:

```pseudo
time.at(T) = T / 60 @ T
```

> Unfortunately this is not exactly 60hz, so this varies. Also, some monitors have much higher refresh rates, so you should never rely on 60Hz! 

## Signal functions

We call a function on signals a `signal function`, for obvious reasons 😉. 

> Often we also use the term `reactive operator`, or just `operator` or `function` when the context is clear.

Mathematically, a `signal function` transforms one or more `input signals` into an `output signal`.

We roughly classify `signal functions` into three groups:

- `pure signal functions`
   - These are just regular [pure functions](https://en.wikipedia.org/wiki/Pure_function) that are lifted to work on signals.
   - We only need to known the `input values` at the __current time__ to compute the output values, the `time-stamps` nor signal history doesn't matter.
   - For example, all the __arithmetic operators__ and __trigonometric functions__ can be applied to signal functions.
   - See the page [pure signal functions](/refman/concepts/pure_functions) for more details
- `plain signal functions`
   - These are reactive operators that need both the `time-stamps` _and_ `values` at the __current time__ to compute the output.
   - The most frequently used plain signal functions are `merge` `$501`, `snapshot` `$509` and `filter` `$508` 
   - See the page [plain signal functions](/refman/concepts/plain_functions) for more details
- `history signal functions`
   - The output of these operators depends on the __history__ of the input signals.
   - For example, an `integral` `$400` will make a sum of __many samples__ in the `input velocity signal`.

Here are some examples:

### Pure: rotating a square with time multiplied by 3
```vikid-script
𝕍i𝕂i𝔻 v0.7-657-g990cc30c2e38 s21
{ 
  pure👁: ■.rotate(🕒.mul(3))
}
```

### Plain: blocking time unless mouse button is pressed, using merge to provide an initial value.
```vikid-script
𝕍i𝕂i𝔻 v0.7-687-g0b41cdbf s21
{ 
  ‘⌂’: {* 
    ‘mouse down?’: 🏭.mouseButton(0, ☑),
    time👁: 🕒.filter(‘mouse down?’).print(3).mergeLeft(«'click%0Ahere'»)
  }
}
```

### History: integrals in [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law)
```vikid-script
𝕍i𝕂i𝔻 v0.7-687-g0b41cdbf s21
{ 
  ‘⌂’: {* 
    a: (-1).mul(x),
    v: 0.integral(a),
    x: 6.integral(v),
    spring👁: «●.translateX(x)»
  }
}
```

> Note that due to _inaccuries_ we get some rounding errors over time. Computers have limited precision and can't represent real numbers exactly.

## Signals vs variables

Non-reactive programming languages (like C, C++, C#, Python, Javascript, etc) don't use signals but __mutable variables__. For example, suppose we want to increment a `score` when an event named `kaboom` happens. If the `score` goes above 10, we give the player an extra `live`, and repeat that when `score` goes above `20`, then `30`, etc... This is written as follows in C# (other languages even don't have builtin support for events):

> If you don't know these programming languages, feel free to skip ahead to the __spreadsheets__ section. Actually, _not knowing_ any of the old-school languages is often an __advantage__ when learning reactive programming!

```pseudo
public class EventSource 
{
    public event Action Kaboom;

    public void RaiseKaboom()
    {
        Kaboom?.Invoke();
    }
}

public class Example
{
    private int nextExtraLiveScore;

    public int Score { get; private set; }
    public int Lives { get; private set; }

    public Example(EventSource source)
    {
        Score = 0;
        Lives = 3;

        nextExtraLiveScore = 10;

        source.Kaboom += delegate
        {
            Score = Score + 1;
            if (Score >= nextExtraLiveScore) 
            {
              Lives = Lives + 1;
              nextExtraLiveScore = nextExtraLiveScore + 10;
            }
        };
    }
}
```

Not only is this very verbose, it has many problems:
- the event handler (`delegate`) must be removed at some point from the `Kaboom` event, otherwise you get a __memory leak__.
- code that depends on the `Score` must be called explicitly, since changing a variable in these languages __does not update other variables that use `Score` automatically__. In this example, we are updating the `Lives`. But we might also need to repaint the `Score`, or keep a high scores, etc...

Explicitly calling other code that depends on `Score` being incremented is error prone, since other parts of the code could change `Score` too.

To solve this in C#, `Score` is often changed into an __observable property__, that has its own event, e.g. `ScoreChanged`. Dependent code can then just subscribe to the `ScoreChanged` event, observing the `Score`, and act upon changes, just like we reacted on the `Kaboom` event. However this now means that changing the `Score` suddenly changes many other variables in the system, in a __hard to determine order__, making it almost impossible to reason about what is happening... Furthermore this can introduce __infinite loops__ when two variables depend on each other!

> We have been writing software like this for over 30 years, so we have felt the pain... We only discovered reactive programming late in our careers, and ViKiD was born out of enthusiasm for this amazing paradigm!

## Spreadsheets

If you ever programmed a __spread sheet__, you will have noticed that all __cells update automatically__. This __reactive behavior__ can be used for much more than spreadsheets, and solves all of the problems above!

Let us code the same thing in ViKiD pseudo code:

```pseudo
score: 0 ⊕ (score.previous() + 1).when(kaboom),
nextExtraLiveScore: 10 ⊕ (nextExtraLiveScore.previous() + 10).when(giveExtraLive),
giveExtraLive: (score >= nextExtraLiveScore).rising(),
lives: 3 ⊕ (lives.previous() + 1).when(giveExtraLive)
```

> In most programming languages, `score`, `nextExtraLiveScore` etc are called __variables__. To avoid confusion, we call these [__`bindings`__](https://en.wikipedia.org/wiki/Name_binding) in ViKiD.


That's it, 4 lines of code. Read this as follows:
- the `⊕` symbol stands for `merge`, but for now, read it as `followed by`.
- `score` starts with the value `0`, and is incremented when `kaboom` happens.
- `nextExtraLiveScore` starts with `10`, and is incremented by `10` whenever an `extra live is given`.
- `an extra live should be given` the moment the `score` goes above the `nextExtraLiveScore`
- `lives` starts at `3` and is incremented when an `extra live must be given`.

Note that incrementing the score in C# is done like:

```pseudo
score = score + 1
```

But that doesn't make any sense mathematically, because that would mean we have a value that is equal to itself plus one. No such value exists...

In ViKiD, such constructions are not possible, we can not directly "write" to the score signal.

What we could do is:

```pseudo
score = score.previous() + 1
```

Todo: move this to an earlier "mutable variables vs signals" section



Here's the real ViKiD program, that raises the `kaboom` event every second, and also converts the `score` and `lives` into a text `string`

```vikid-script
𝕍i𝕂i𝔻 v0.7-657-g990cc30c2e38 s21
{ 
  ‘⌂’: {* 
    ‘kaboom!’: 🏭.timer((1.000000), ☑),
    lives: (3.000000).merge(lives🐢.add((1.000000)).when(‘giveExtraLive!’)),
    ‘giveExtraLive!’: score.gte(nextExtraLiveScore).rising(),
    nextExtraLiveScore: (10.000000).merge(nextExtraLiveScore🐢.add((10.000000)).when(‘giveExtraLive!’)),
    score: (0.000000).merge(score🐢.add((1.000000)).when(‘kaboom!’)),
    scoreText: 'score%3D'.concat(score.print((0.000000))),
    livesText: 'lives%3D'.concat(lives.print((0.000000))),
    text: «scoreText.concat('%0A%0A').concat(livesText)»
  }
}
```

> __Click__ on the formula row above or below the `#0FF current row □` to see the rest of the ViKiD program. Because every values animates, we don't show all formulas at once in ViKiD - at least not in the animating block style - but we do plan to support that someday.

Let's look at this ViKiD program in detail:
- Every `signal` is shown as a block.
- When the `value` and `timestamp` of a `signal` __updates__, the little `#FF0 ⬤` light in the block __flashes__.
- Some of these lights have a red `#F00 ◯` or purple `#F0F ◯` outline. This means the `signal` the block is refering to is __delayed__ by one `timestamp`, i.e. it will receive the `signal value` of the `previous frame`.
  - purple `#F0F ◯` is a delayed reference explicitly made the user, by __long-pressing the chain icon__ when linking to a formula.
  - red `#F00 ◯` delays are inserted automatically by ViKiD to avoid __infinite loops__. 
    - you often want to revise these, and make them explicit.
  - Many bindings like `score` refer to their own value. 
    - to avoid __infinite loops__, we have to sample their previous, delayed value. 
  - Only a few operators allow making loops, the most important being `merge` `$501`, `snapshot` `$509`, `filter` `$508` and `integral` `$400`,
- Numbers are shown both in the decimal system, but also in a more intuitive clock-like graphical representation.
- In the `giveExtraLive` binding, `score >= nextExtraLiveScore` gives a `boolean` value (`on`/`off`, `true`/`false`, `yes`/`no`, ...)
  - this `boolean` signal updates whenever it becomes either `true` or `false`
  - but we only want to give an extra live the __moment__ the `score` becomes `>= nextExtraLiveScore`, so when `score >= nextExtraLiveScore` goes from `false` to `true`. This is what the [`rising` operator](https://en.wikipedia.org/wiki/Signal_edge) does.
- just like a spreadsheet, ViKiD will automatically keep all `signal` values and `timestamps` synchronized in the __correct order__, and manage event handler memory for you.
- We use a lot of symbols for frequently used or intuitive operators:
  - the `output` of each operator is shown on the __right of a horizontal arrow__ ➔.
  - the `when` operator is shown as a `$500` photo camera taking a `snapshot`. 
    - The light on the camera shows what parameter update will cause the snapshot
  - the `rising` operator is an `diagonal arrow` `$503`.
  - the `timer` operator is shown as an `hourglass` `$502`.
  - `Boolean` values are shown as `on`/`off` switches, __green__ and __red__ respectively.
  - to produce events without a value (points in time), we abuse a `factory` 🏭 icon (also known as the `unit` value = `()`)
 - You can click on the `V` icon on right of each binding's formula to toggle between different syntaxes.
   - _However, the math and textual syntaxes are currently not yet very well supported, and might be buggy_

So in ViKiD (or in general, any declarative reactive language), each binding's formula describes __all of the possible behavior of the signal__, it tells the __full story__. Is this __easier__ than in classical languages? That is debatable, but we feel it is whole lot __simpler__ 😉.

> Note that many __mission critical software__ for nuclear power plants, fighter jets, rockets, etc is written in similar dataflow languages. For example Airbus, Dassault, Verilog and others use [Scade](https://en.wikipedia.org/wiki/Lustre_(programming_language))



