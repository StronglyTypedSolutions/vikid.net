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
input.add(value) = input.pure(+, value)

input.pure(operator, value).at(ts) = ( x0.operator(x1), t0.max(t1) ) if ready else pending
                                     where (x0, t0) = input.at(ts)
                                           (x1, t1) = value.at(ts)
                                           ready    = (t0 > 0 and t1 > 0)
                                           pending  = (⊥, 0)

# A signal is a sequence of (value, stamp) pairs, where the first pair is pending (⊥, 0), and timestamp is monotonically increasing.
signal = [ (⊥, 0), (x0, t0), (x1, t1), ... ] where ∀ i > 0: t[i] > 0 and t[i] > t[i-1]

# A signal sampled at a timestamp ts is the pair with stamp closest to ts but not larger than ts
signal.at(ts) = (x[i], t[i]) where ∀ j ≤ i: t[j] <= ts and ∀ j > i: t[j] > ts
               
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

