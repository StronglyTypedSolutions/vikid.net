# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When the `input` updates, `output`s a snapshot of the `source`
- No output is generated if the `source` is `pending`.
- The `output` is _not updated_ when the `source` updates, only the `input` triggers that.
- This is the same reactive operator as [`when`](/refman/overloads/when_500_01ItCxfnKcnYHL2788ns4f), but with the _arguments flipped_.
- The flash of the photo camera icon is on the _left side_, because the `trigger` is the _left parameter_.
- Unlike `when`, `snapshot` does _not allow feedback loops_.

[more...](http://reactivex.io/documentation/operators/sample.html)

# Example

- When the `mouse button` is clicked (in the `output view`, the large rectangle), takes a `snapshot` of the current `time`

```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    ‘click!’: 🏭.mouseButton(0, ☑).rising(),
    ‘time @ click’👁: «‘click!’.snapshot(🕒)»
  }
}
```

# Semantics

```pseudo
input.snapshot(source).at(T) = 
  Vs@Ti if ready else pending
  where
    Vi@Ti = input.at(T)
    Vs@Ts = source.at(Ti)
    ready = Ti>0 and Tt>0
    pending = ⊥ @ 0
```

