# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- When the `input` _updates_, it is _copied_ to the `output` but _only when_ the `pass through?` signal's value is `true`.
- In electronics, this resembles a [transistor](https://en.wikipedia.org/wiki/Transistor).

> Note that when the `pass through?` updates from `false` to `true`, it _will not update_ the `output`; this occurs _only when_ the `input` updates. To get this behavior, simple take a [snapshot](/refman/overloads/when_500_01ItCxfnKcnYHL2788ns4f) of the `input` using the `pass through?` as a trigger.

[related...](http://reactivex.io/documentation/operators/filter.html)

# Example 1
- The `seconds` signal outputs the `time` rounded down to seconds.
- When the `mouse button` is _pressed_ in the `output view` (the large green rectangle), the `seconds` signal is passed through _when it updates_
> A _short click_ of the mouse button often does nothing; see the note in the description


```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    seconds: 🕒.floor().calm(☒),
    ‘mouse down?’: «🏭.mouseButton(0, ☑)»,
    ‘filtered seconds’👁: seconds.filter(‘mouse down?’)
  }
}
```

# Example 2
- The same example as above, but now we combine this with the [merge operator](/refman/overloads/merge_501_019KjsIPFfjWa8BqRl) to also pass through the latest value of the `input`:

```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    seconds: 🕒.floor().calm(☒),
    ‘mouse down?’: «🏭.mouseButton(0, ☑)»,
    ‘filtered seconds’👁: seconds.merge(‘mouse down?’).filter(‘mouse down?’)
  }
}
```


# Example 3
- Filter is often used together with [merge](refman/overloads/merge_501_019KjsIPFfjWa8BqRl) to mimic the _for loops_ of imperative languages
- Here we make an `index` that iterates from `0` to `9` (inclusive), then stops

> ⓘ use the toolbar buttons to restart or step through it, see [fundamentals](/refman/concepts/fundamentals)

```pseudo
more  := index.previous() < 9
index := 0 ⊕ (index + 1).filter(more)
```

```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    ‘more?’: index.lt(9),
    index👁: 0.merge(index.add(1).«filter»(‘more?’))
  }
}
```

# Example 4
- We use the technique of example 3 to compute `5!`, so the [factorial of 5](https://en.wikipedia.org/wiki/Factorial)
- This is just `5 * 4 * 3 * 2 * 1 = 120`

```pseudo
more := term.previous() > 1
term := 5 ⊕ (term - 1).filter(more)
fac5 := term ⊕ (fac5.previous() * term).filter(more)
```

> Note that we must filter both the `term` and `fac5` binding; otherwise they will update forever since the _feedback loop is not broken_.

```vikid-script
𝕍i𝕂i𝔻 v0.7-747-g2397e2f05639 s22
{ 
  ‘⌂’: {* 
    ‘more?’: term.gt(1),
    term: 5.merge(term.sub(1).filter(‘more?’)),
    fac5👁: term.merge(fac5.mul(term).«filter»(‘more?’))
  }
}
```

> Note that this is harder than in functional and imperative programs, we are a bit 'abusing' reactive programming for this. However, the ViKiD program doesn't suffer from [stack buffer overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow)

# Example 5
- This more advanced example combines several reactive operators to create a new random procedural tree each second

```vikid-script
𝕍i𝕂i𝔻 v0.7-750-g7e6c265e s22
{ 
  ‘⌂’: {* 
    ‘branch depth’: 9,
    ‘random seed’: 🕒.timer(1, ☑, ☑),
    ‘rebuild!’: 🏭.when(‘random seed’.merge(‘branch depth’)),
    wiggle: 🏭.pseudoRandomNumber((-0.5), (0.5), ‘random seed’),
    more: level.lte(‘branch depth’),
    level: 0.mergeLeft(‘rebuild!’).mergeLeft(1.add(level).filter(more)),
    stem: ■.paintSolid(#834E25).translateY((-1)).scaleX((0.25)).scaleY((3.125)).translateY((0.25)),
    ‘left branch’: tree.translateY(6).scale((0.75)).rotate((-1).add(wiggle)),
    ‘right branch’: tree.translateY(6).scale((0.75)).rotate(1.add(wiggle)),
    tree: Ø.mergeLeft(‘rebuild!’).mergeLeft(stem.under(‘left branch’.under(‘right branch’))).when(level).«filter»(more),
    output👁: tree.scale((0.5)).translateY((-2))
  }
}
```

> Instead of the default ViKiD clock that runs at the refresh rate of your display, you can also use a `loop adjuster` to run a sub-program as fast as possible. 


# Semantics

```pseudo
input.filter(condition) := { ⊥ @ 0, Vi @ Ti, ... } 
  where Vi @ Ti ∈ input and Vc
        Vc @ Tc = condition.at(Ti)
```

> For this signal function, the semantics are easier directly described; we are not using  the `.at()` sampling function.

