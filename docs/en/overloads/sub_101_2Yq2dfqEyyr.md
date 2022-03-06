# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description

__Number subtraction__ [lifted on signals](/refman/concepts/pure_functions) 

- [related...](https://en.wikipedia.org/wiki/Subtraction)

# Example 1

- `3 - 2 = 1`

```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  ‘⌂’: { output: 3.«sub»(2) }
}
```

# Example 2

- A `circle` `translates` with the `clock`, but offset to the left by `5 units`.
- Also using the `modulus` operator to map the `clock` to the interval `[0..3)`

```vikid-script
𝕍i𝕂i𝔻 v0.7-726-g355c27b76cf4 s22
{ ‘⌂’: {
  c: ●.scale(0.5),
  t: 🕒.mod(3),
  a👁: c.translateX(t.«sub(5)) 
} }
```

# Example 3
- shifts the oscillating `input` by two units in the negative direction.
- Subtraction is [pure](/refman/concepts/pure_functions), so:
  - the `input` is only _ready_ after one second, so the `output` is _pending_ for one second.
  - when the `input` doesn't update, neither does the `output`.

```vikid-script
𝕍i𝕂i𝔻 v0.7-792-g18bbbb14 s23
{ 
  input📡: { 
    speed: 1,
    ‘active?’✉: ☑.timer(1, ☒).merge(‘active?’.not().timer(π.mul(2).div(speed).ite(‘active?’🐢, 1), ☑)),
    sine: 0.when(‘active?’).integral(speed.ite(‘active?’, 0)).sin().mul(3)
  },
  ‘value﹟43’📡: { ‘value﹟44’📡: { ‘value﹟45’📡: 2 } },
  ‘⌂’: { output: input.«sub»(‘value﹟43’) }
}
```
