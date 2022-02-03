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

# Example 1
- 1 + 2 = 3
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
- the `input` is ready after one second.

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
}
```

# Semantics
<details>
    <summary>Click to expand</summary>

```julia
# The following pseudo code is a mathematical way 
# to exactly describe the behavior of this ViKiD function.

# "add" is a pure operator: when applying a given set of parameters, the output is always the same.
input.add(value) = input.pure(+, value)

# In ViKiD, every parameter is a signal.
#
# Intuitively, a signal is a variable that has a value and timestamp.
# The variable might not be "ready" yet; then it is "pending" aka uninitialized.
# E.g. the result of an exam is not known before it is graded; the result is "pending".
#
# Mathematically, a signal is a sequence of (Value,Timestamp) pairs, written as V@T.
# The first pair is always pending = ⊥ @ 0, where ⊥ = 'undefined'.
# The timestamp of all other pairs is monotonically increasing.
signal = [ ⊥ @ 0, V0 @ T0, V1 @ T1, ... ] where ∀ i > 0: Ti > 0 and Ti > T(i-1)

# A signal sampled at a timestamp Ts is the pair 
# with stamp closest to Ts but not larger than Ts.
#
# Intuitively, you get back the value and timestamp most recent to Ts
signal.at(Ts) = Vi @ Ti where ∀ j ≤ i: Tj <= Ts and ∀ j > i: Tj > Ts

# In ViKID, every pure operator has the following reactive behavior.
input.pure(operator, value).at(Ts) = V0.operator(V1) @ T0.max(T1) if ready else pending
                                     where V0 @ T0 = input.at(Ts)
                                           V1 @ T1 = value.at(Ts)
                                           ready    = T0 > 0 and T1 > 0
                                           pending  = ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

</details>
