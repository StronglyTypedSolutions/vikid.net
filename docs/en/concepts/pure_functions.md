# Pure signal functions

Many of the reactive `signal functions` in ViKiD are `pure`. 

In general, a `pure function` returns the same output for the same given set of input values.

Most of the well know operators in mathematics are pure.

A `pure signal function` __combines__ its parameter signals values together with the corresponding non-reactive function. In computer science, we also say the operator is _lifted_ on signals, or that it _zips_ the signal values together.

When any of the parameter signals update, the `pure signal function` updates too.

However, it waits for all parameters to be `ready` before updating at all.

For example, addition on signals `input` and `param` zips the + operator:

```pseudo
input.add(param) = input.zip(param, +)
```

Often we use the same symbol or name for both the reactive function and non-reactive operator.

For example, the sine function:

```pseudo
input.sin(param) = input.zip(param, sin)
```

The semantics of a binary zip is described by its output on each sampled inputs:

```pseudo
input.zip(operator, param).at(Ts) = V1.operator(V2) @ T1.max(T2) if ready else pending
                                    where V1 @ T1 = input.at(Ts)
                                          V2 @ T2 = param.at(Ts)
                                          ready    = T1 > 0 and T2 > 0
                                          pending  = ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

