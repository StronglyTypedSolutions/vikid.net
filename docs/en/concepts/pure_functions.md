# Pure signal functions

Many of the reactive `signal functions` in ViKiD are `pure`. 

In general, a `pure function` returns the __same output__ for the same __given set of input values__.

All mathematical functions are pure. In ViKiD however, we use the word `pure` for functions that __do not depend on time__. 

A `pure signal function` __combines__ its parameter signals values together with the corresponding non-reactive function. 

> In computer science, we also say the operator is _lifted_ on signals, or that it _zips_ the signal values together.

- When any parameter signal is `pending`, the `output` is `pending` too.
- Otherwise, when any of the parameter signals update, the `pure signal function` updates too.

For example, `addition` on the signals `input` and `param` zips the `+ operator`:

```pseudo
input.add(param) = input.zip(param, +)
```

Often we use the __same symbol or name__ for both the reactive function and non-reactive operator. For example, the sine function:

```pseudo
input.sin(param) = input.zip(param, sin)
```

The semantics of a binary zip are:

```pseudo
input.zip(operator, param).at(T) = 
  V1.operator(V2) @ T1.max(T2) if ready else pending
  where 
    V1 @ T1 = input.at(T)
    V2 @ T2 = param.at(T)
    ready   = T1 > 0 and T2 > 0
    pending = ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

