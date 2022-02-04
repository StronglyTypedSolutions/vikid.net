# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
__Numeric addition__
- as soon as both `input` and `value` are ready, the `output` becomes `input` + `value`.
- when `input` or `value` update, the `output` sum is updated.
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
<summary>Mathematical description of the behavior of this operator</summary>
    
```julia
input.add(value) = input.pure(+, value)
```

<details>
<summary>Explanation of <code>pure</code></summary>

In ViKID, every pure reactive operator has the following behavior:

```julia
input.pure(operator, value).at(Ts) = V1.operator(V2) @ T1.max(T2) if ready else pending
                                     where V1 @ T1 = input.at(Ts)
                                           V2 @ T2 = value.at(Ts)
                                           ready    = T1 > 0 and T2 > 0
                                           pending  = ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

<details>
<summary>Explanation of <code>@, pending, ready, at</code></summary>

In ViKiD, every `parameter` is a `signal`.

Intuitively, a `signal` is a variable that has a `value` and `timestamp`.
The variable might not be `ready` yet; then it is `pending` aka `uninitialized`.
E.g. the result of an exam is not known before it is graded; the result is `pending`.

Mathematically, a `signal` is a sequence of `(Value,Timestamp)` pairs, written as `V @ T`.
The first pair is always `pending = ⊥ @ 0`, where `⊥` means `undefined`.
The timestamp of all other pairs is monotonically increasing.

```julia
signal = [ ⊥ @ 0, V1 @ T1, V2 @ T2, ... ] where ∀ i > 0: Ti > 0 and Ti > T(i-1)
```

Sampling a signal `at` a timestamp `Ts` returns the pair `Vi @ Ti` closest to `Ts`, so no other `Vj @ Tj` exists in the signal between `Ti` and `Ts`:

```julia
signal.at(Ts) = Vi @ Ti where ¬ Ǝ Vj @ Tj ∈ signal: Ti ≤ Tj ≤ Ts
```

</details>
</details>
</details>
