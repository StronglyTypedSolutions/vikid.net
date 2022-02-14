# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When the `input` updates, outputs a snapshot of the `source`
- No output is generated if the `source` is `pending`
- The `output` is not updated when the `source` updates, only the `input` triggers that.
- This is the same reactive operator as [`when`](/Redman/overloads/when), but with the arguments flipped.

[more...](http://reactivex.io/documentation/operators/sample.html)

----
# Semantics

```pseudo
input.snapshot(source).at(T) = 
  Vs©Ti if Ti>0 and Ts>0 else pending
  where
     Vi@Ti = input.at(T)
     Vs@Ts = source.at(Ti)
```

