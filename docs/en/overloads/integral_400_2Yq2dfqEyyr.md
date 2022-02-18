# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
__Integrates a number over time__
 - the `output` is _reset_ to the `input` whenever it _updates_.
 - the `output` is _incremented_ by `velocity` units per second.
 - when the `velocity` is `zero`, the `output` is _not updated_.
 - the `output` can only be produced when both the `input` and `velocity` are _ready_.

[more...](https://en.wikipedia.org/wiki/Velocity)

# Example 1
- the initialization of the `output` is delayed by one second.
- the `output` is incremented by one unit per second.
- the `input` is reset to zero every `5` seconds, restarting the `output` too.
```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  input📡: 0.timer(1, ☒).merge(0.timer(5, ☑)),
  velocity📡: 1,
  ‘⌂’: { «output: input.integral(velocity)» }
}
```

# Example 2
- a ball falls at an acceleration of `9.81 units` per second
- when the ball falls below `-5` units, it bounces
```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{ 
  ‘⌂’: {* 
    bounce: y.lte((-5)).rising(),
    v: 0.merge(v.neg().when(bounce)).integral((-9.810)),
    y: 5.integral(v),
    ball: «●.translateY(y)»
  }
}
```



