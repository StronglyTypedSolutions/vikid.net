# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When `input` _or_ `pass through?` _updates_, the `input` is _copied_ to the `output` but _only when_ the `pass through?` signal value is `true`.
- In electronics, this resembles a [transistor](https://en.wikipedia.org/wiki/Transistor).

[related...](http://reactivex.io/documentation/operators/filter.html)

# Examples

TODO

# Semantics

```pseudo
input.filter(condition) := { ⊥ @ 0, Vi @ Ti, ... } 
  where Vi @ Ti ∈ input and Vc
        Vc @ Tc = condition.at(max(Ti, Tc))
```

> For this signal function, the semantics are easier directly described; we are not using  the `.at()` sampling function.

