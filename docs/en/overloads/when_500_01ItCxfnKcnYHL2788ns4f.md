# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When the `trigger` updates, outputs a snapshot of the `input`
- No output is generated if the `input` is `pending`
- The `output` is not updated when the `input` updates, only the `trigger` triggers that.
- This is the same reactive operator as [`snapshot`](/Redman/overloads/snapshot), but with the arguments flipped.
- The flash of the photo camera icon is on the right side, because the trigger is the right parameter of the function

[related...](http://reactivex.io/documentation/operators/sample.html)

----
# Semantics

```pseudo
input.when(trigger).at(T) = 
  Vi©Tt if Ti>0 and Tt>0 else pending
  where
     Vi@Ti = input.at(Tt)
     Vt@Tt = trigger.at(T)
```

