# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
__Numeric addition__
- as soon as both `input` and `value` are ready, the `output` becomes `input` + `value`.
- when `input` or `value` updates, the `output` sum is updated.
- [more...](https://en.wikipedia.org/wiki/Addition)

# Semantics
```julia
# The following pseudo code is a mathematical way 
# to exactly describe the behavior of this ViKiD function.

input.add(value) = input.pure(+, value)

input.pure(operator, value).at(Ts) = ( V0.operator(V1), T0.max(T1) ) if ready else pending
                                     where (V0, T0) = input.at(Ts)
                                           (V1, T1) = value.at(Ts)
                                           ready    = (T0 > 0 and T1 > 0)
                                           pending  = (⊥, 0)

# A signal is a sequence of (value, stamp) pairs.
# The first pair is always pending = (⊥, 0), where ⊥ = 'undefined'.
# The timestamp of all other pairs is monotonically increasing.
signal = [ (⊥, 0), (V0, T0), (V1, T1), ... ] where ∀ i > 0: Ti > 0 and Ti > T(i-1)

# A signal sampled at a timestamp Ts is the pair 
# with stamp closest to ts but not larger than Ts.
# Basically the pair of the signal that is not newer than Ts.
signal.at(Ts) = (Vi, Ti) where ∀ j ≤ i: Tj <= Ts and ∀ j > i: Tj > Ts
               
```


# Example 1
```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  input: 1,
  value: 2,
  ‘⌂’: { «output: input.add(value)» }
}
```

# Example 2
- shifts the oscillating `input` by two units.
- the initialization of the `input` is delayed by one second.

```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  input📡: { 
    speed: 1,
    ‘active?’✉: ☑.timer(1, ☒).merge(‘active?’.not().timer(π.mul(2).div(speed), ☑)),
    sine: 0.when(‘active?’).integral(speed.ite(‘active?’, 0)).sin().mul(3)
  },
  value📡: { value📡: { value📡: 2 } },
  ‘⌂’: { «output: input.add(value)» }
}```

