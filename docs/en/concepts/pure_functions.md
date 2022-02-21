# Pure signal functions
## Introduction
Many of the reactive `signal functions` in ViKiD are `pure`. 

In general, a `pure function` returns the __same output__ for the same __given set of input values__.

All mathematical functions are pure. In ViKiD however, we use the word `pure` for functions that produce an `output value` that __does not depend on the time-stamps of the inputs__. So if you _only know_ the `input values`, you can compute the `output value`.

> For pure signal functions, if any of the `input values` is `⊥` (_undefined_), the `output value` is `⊥` too

A very simple example is adding two constant signals:

```pseudo
three := 1 + 2
```

```vikid-script
𝕍i𝕂i𝔻 v0.7-699-gfefba65283bf s22
{ ‘⌂’: {* three: 1.add(«2») } }
```

However, we can also add two varying signals in exactly the same. For example, here we add the mouse x and y positions:
```pseudo
mouse_sum := mouse_x + mouse_y
```

> In the script below, move your mouse over the blue grid. On mobile, you will need to touch it.

```vikid-script
𝕍i𝕂i𝔻 v0.7-699-gfefba65283bf s22
{ 
  ‘⌂’: {* 
    ‘mouse pos’👁: 🏭.mousePosition(☑, ☑),
    ‘mouse x’📡: ‘mouse pos’.hor(),
    ‘mouse y’📡: ‘mouse pos’.ver(),
    ‘mouse x + y’: «‘mouse x’.add(‘mouse y’)»
  }
}
```

> For simplicity, VikiD uses a fixed coordinate grid of `18 x 12` units, where the horizontal `X axis` points to the __right__, and the vertical `Y axis` points __upwards__. So the range of grid is `-9...9` for `X` and `-6...6` for `Y`. This is a __mathematical Cartesian coordinate system__. _Note that typical 2D computer graphics often use a Y axis the points down, for [legacy reasons](https://gamedev.stackexchange.com/questions/83570/why-is-the-origin-in-computer-graphics-coordinates-at-the-top-left)!_

We can do a lot with just pure signal functions in ViKiD. The following example applies a `sine` function to a speedup `time signal`, then applying the `absolute value` function, using it to drive a bouncing ball:

```pseudo
y := (time * 2).sin().abs() * 5
ball := sphere.translateY(y)
```

```vikid-script
𝕍i𝕂i𝔻 v0.7-699-gfefba65283bf s22
{ 
  ‘⌂’: {* 
    y: 🕒.mul(2).sin().abs().mul(5),
    ball👁: «●.translateY(y)»
  }
}
```


## Semantics

A `pure signal function` __combines__ its parameter signals values together with the corresponding non-reactive function. 

> In computer science, we also say the operator is _lifted_ on signals, or that it _zips_ the signal values together.

- When any parameter signal is `pending`, the `output` is `pending` too.
- Otherwise, when any of the parameter signals update, the `pure signal function` updates too.

For example, `addition` on the signals `input` and `param` zips the `+ operator`:

```pseudo
input.add(param) := input.zip(param, +)
```

Often we use the __same symbol or name__ for both the reactive function and non-reactive operator. For example, the sine function:

```pseudo
input.sin(param) := input.zip(param, sin)
```

The semantics of a binary zip are:

```pseudo
input.zip(operator, param).at(T) := 
  V1.operator(V2) @ T1.max(T2) if ready else pending
  where 
    V1 @ T1 := input.at(T)
    V2 @ T2 := param.at(T)
    ready   := T1 > 0 and T2 > 0
    pending := ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

