# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
__Integrates a vector or point over time__
 - the `output` is _reset_ to the `input` whenever it _updates_.
 - the `output` is _incremented_ by `velocity` units per second.
 - when the `velocity` is `zero`, the `output` is _not updated_.
 - the `output` can only be produced when both the `input` and `velocity` are _ready_.

[related...](https://en.wikipedia.org/wiki/Velocity)

# Example 1
- the `circle` `translates` towards the `mouse position` at a `velocity` proportional to the distance between them.

```vikid-script
𝕍i𝕂i𝔻 v0.7-726-g355c27b76cf4 s22
{ 
  ‘⌂’: {* 
    ‘mouse pos’: 🏭.mousePosition(☑, ☑).merge(⟨0 0 1⟩),
    velocity: ⟨0 0 0⟩.merge(‘mouse pos’.sub(position).mul(6)),
    position: «⟨0 0 1⟩.integral(velocity)»,
    ball👁: ●.translateV(position)
  }
}
```

# Example 2
- the `circle` `translates` towards the `mouse position`, with an `acceleration` proportional to the distance between them
- breaking happens when the `mouse button is pressed`, with a `deceleration` proportional to the opposite `velocity`

```vikid-script
𝕍i𝕂i𝔻 v0.7-726-g355c27b76cf4 s22
{ 
  ‘⌂’: {* 
    ‘mouse pos’: 🏭.mousePosition(☑, ☑).merge(⟨0 0 1⟩),
    ‘mouse pressed?’: 🏭.mouseButton(0, ☑),
    ‘acc breaking’: velocity.mul((-5)),
    ‘acc towards mouse’: ‘mouse pos’.sub(position).mul(4),
    acceleration: ⟨0 0 0⟩.merge(‘acc breaking’.ite(‘mouse pressed?’, ‘acc towards mouse’)),
    velocity: ⟨0 0 0⟩.integral(acceleration),
    position: «⟨0 0 1⟩.integral(velocity)»,
    ball👁: ●.translateV(position)
  }
}
```


# Example 3
- a rocket ship `sprite` from the website https://opengameart.org is used as an image.
- the rocket is launched with an initial `velocity` vector and `position` position, and falls under gravity.
- the simulation is repeated each 3 seconds by resetting the `velocity` and `position`.

```vikid-script
𝕍i𝕂i𝔻 v0.7-726-g355c27b76cf4 s22
{ 
  ‘⌂’: {* 
    sprite: 🏭.bitmapImage('https://opengameart.org/sites/default/files/onlyrocket.svg', ☑, 12).translateY(1),
    ‘restart!’: 🏭.timer(3, ☑, ☑),
    position: «⟨-10 -10 1⟩.when(‘restart!’).integral(velocity)»,
    velocity: ⟨6 16 0⟩.when(‘restart!’).integral(acceleration),
    acceleration: ⟨0.08609382808208466 -9.844375312328339 0⟩,
    angle: ⟨0 1 0⟩.angle(velocity, ☒),
    simulation👁: sprite.rotate(angle).translateV(position)
  }
}
```

