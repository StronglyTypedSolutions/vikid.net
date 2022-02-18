# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description

__Number addition__ [lifted on signals](/refman/concepts/pure_functions) 
- as soon as both `input` and `param` are _ready_, the `output` becomes `input` + `param`.
- then, whenever `input` or `param` _update_, the `output` is updated with `input` + `param`.
- [more...](https://en.wikipedia.org/wiki/Addition)

# Example 1

- `1 + 2 = 3`

```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  input: 1,
  value: 2,
  ‘⌂’: { «output: input.add(value)» }
}
```

# Example 2

- A `circle` `translates` with the `clock`, but offset to the right by `2 units`.

```vikid-script
𝕍i𝕂i𝔻 v0.7-726-g355c27b76cf4 s22
{ ‘⌂’: {* a👁: ●.translateX(🕒.add(«2»)) } }
```

# Example 3
- shifts the oscillating `input` by two units.
- the `input` is _ready_ after one second, so the `output` is _pending_ for one second.

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
