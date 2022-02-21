# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
The __vector__ `+` operator (`plus` function) [lifted on signals](/refman/concepts/pure_functions)


# Example 1
- Adding two vectors
```vikid-script
𝕍i𝕂i𝔻 v0.7-750-g7e6c265e2b95 s22
{ 
  ‘⌂’: { 
    v: ⟨-2 1 0⟩.mul(🕒.sin()),
    a👁: ⟨1 2 0⟩.«add»(v) 
  } 
}
```

# Example 2
- Adding a vector to a point

```vikid-script
𝕍i𝕂i𝔻 v0.7-760-g848761a556d6 s22
{ 
  ‘⌂’: {* 
    v: ⟨-2 1 0⟩.mul(🕒.sin()),
    p👁: ⟨0 0 1⟩.«add»(v)
  }
}
```

[see also...](/refman/concepts/vectors)

[related...](https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction)
