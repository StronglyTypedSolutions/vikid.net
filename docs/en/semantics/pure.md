A pure reactive function zips its parameter signals together with some scalar operator.

In computer science, we also say the operator is "lifted" on signals.

For example, addition on signals `input` and `param` zips the + operator:

```pseudo
input.add(param) = input.zip(param, +)
```

Often we use the same symbol or name for both the reactive function and scalar operator.

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

