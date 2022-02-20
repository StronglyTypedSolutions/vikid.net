# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When the `trigger` updates, `output`s a _snapshot_ of the `input`
- No `output` is generated if the `input` is `pending`.
- The `output` is _not updated_ when the `input` updates, it is only controlled by the `trigger`.
- This is the same reactive operator as [`snapshot`](/refman/overloads/snapshot_509_0JacUv6cPrekp6nznRwI), but with the _arguments flipped_.
- The flash of the photo camera icon is on the _right side_, because the `trigger` is the _right parameter_.
- Unlike `snaphot`, `when` allows _feedback loops_ through the `trigger` parameter.

[related...](http://reactivex.io/documentation/operators/sample.html)

# Example

- When the `mouse button` is clicked (in the `output view`, the large rectangle), takes a `snapshot` of the current `time`

```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    ‘click!’: 🏭.mouseButton(0, ☑).rising(),
    ‘time @ click’👁: «🕒.when(‘click!’)»
  }
}
```

# Semantics

```pseudo
input.when(trigger).at(T) = 
  Vi@Tt if ready else pending
  where
    Vt@Tt = trigger.at(T)
    Vi@Ti = input.at(Tt)
    ready = Ti>0 and Tt>0
    pending = ⊥ @ 0
```

