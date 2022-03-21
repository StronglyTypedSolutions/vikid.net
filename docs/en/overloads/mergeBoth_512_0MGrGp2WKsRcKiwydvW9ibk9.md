# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- If the `input` updates, copy it to the `output`
- If the `param` updates, copy it to the `output`
- If __both updated at the same time__, and the `simultaneous` signal is __ready__ _or_ __updates__, copy it to the `output`

[related...](http://reactivex.io/documentation/operators/merge.html)

# Example
```vikid-script
𝕍i𝕂i𝔻 v0.7-750-g7e6c265e2b95 s22
{ ‘⌂’: { a👁: 0.«merge»(0) } }
```

# Semantics

```pseudo
input.merge(simultaneous, param).at(T) := Vo@To
  where
    Vi@Ti   := input.at(T)
    Vp@Tp   := param.at(T)
    Vs@Ts   := simultaneous.at(T)
    Vo@To   := Vi @ Ti if Ti > Tp else 
               Vp @ Tp if Ti < Tp else 
               Vs @ Ts if Ts > 0 else
                ⊥ @ 0
```
