# Angles in ViKiD

ViKiD uses [clock position](https://en.wikipedia.org/wiki/Clock_position) to represent angles. 

So unlike mathematics, angles increment clockwise, like in computer graphics. 12 "hours" map to -360 degrees or -2𝜋 in mathematics.

> This decision was made to make it easy for young children to relate angles to the clock, something they master at a young age. It also makes it easy to rotate objects using the number editor. And also because [twelve is such a nice superior highly composite number](https://en.wikipedia.org/wiki/Duodecimal) 😉

# Example 1

- Rotating an arrow with the clock

```vikid-script
𝕍i𝕂i𝔻 v0.7-761-g16665435591b s22
{ ‘⌂’: {* a👁: «⟨0 5 0⟩.filled(3).rotate(🕒)» } }
```

# Example 2

- Measuring the angle between the origin-to-mouse-position vector and the X-axis.

```vikid-script
𝕍i𝕂i𝔻 v0.7-761-g16665435591b s22
{ 
  ‘⌂’: {* 
    ‘mouse direction’📡: 🏭.mousePosition(☑, ☑).sub(⟨0 0 1⟩).round(),
    ‘x axis’📡: ⟨6 0 0⟩,
    angle📡: ‘x axis’.«angle»(‘mouse direction’, ☒),
    text: 'angle = '.concat(angle.print(2)).filled(0, 0, 0).translateV(⟨5 5 0⟩),
    scene👁: ‘x axis’.filled(2).paintSolid(#003D00).under(‘mouse direction’.filled(2)).under(text)
  }
}
```

TODO: Document





