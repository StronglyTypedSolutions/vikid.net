# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- The `angle between` function [lifted on signals](/refman/concepts/pure_functions)
- Measures the __shortest__ `angle between two vectors`
- When `radians?` is `off`, then:
  - the `output` is in __clock position__ units
  - the `output` is __negative__ if the shortest rotation from the `input` to the `param` vector is __counter clockwise__
- When `radians?` is `on`, then
  - the `output` is in __radians__ units
  - the `output` is __negative__ if the shortest rotation from the `input` to the `param` vector is __clockwise__
    - More generally, the sign is __positive__ when this is in the __same direction__ as rotating the `X-axis` to the `Y-axis`.
      - This is counter-clockwise in ViKiD and math, but is clockwise in most 2D computer graphics software.

> Currently this function treats points `⟨x,y,w⟩` as vectors `⟨x,y,0⟩`, so it completely ignores the weight. _But this behavior can change, so you should only pass vectors_

[more about vectors...](/refman/concepts/vectors)

[more about angles...](/refman/concepts/angles)

[related...](https://en.wikipedia.org/wiki/Dot_product#Geometric_definition)

# Example
- The angle between the vectors `u` and `v`

> Drag the blue points to get a feel of the function.

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    ‘animate?’📡: ☑.merge(☒.when(🏭.mouseButton(0, ☑).rising().take(1))),
    animation: 🕒.div(2).filter(‘animate?’),
    ‘Circle Constraint’📡: { 
      ‘position﹟604’🔩: ⟨4.75 4.5 1⟩,
      ‘radius﹟621’: 5,
      ‘grid steps’: 12,
      angle: ⟨1 0 0⟩.angle(‘position﹟604’, ☒).mul(‘grid steps’).round().div(‘grid steps’),
      snapped: ⟨0 0 1⟩.add(⟨1 0 0⟩.mul(‘radius﹟621’)).rotate(angle),
      ‘result﹟765’: ‘position﹟604’.ite(‘animate?’, snapped)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨3.75 3.25 1⟩,
      shape🔩: ●.scale((0.5)).paintSolid(#08ACFF).transparentize((0.5)),
      Constraint🔩: { ‘position﹟348’🔩: ⟨0 0 1⟩ },
      ‘mouse pos’: 🏭.mousePosition(☒, ☑),
      ‘mouse down?’: 🏭.mouseButton(0, ☑),
      ‘mouse down!’: ‘mouse down?’.rising(),
      ‘mouse up!’: ‘mouse down?’.not().rising(),
      drag: ‘mouse pos’.derivative(‘in shape?’),
      ‘in shape?’: output.containsPoint(‘mouse pos’).when(‘mouse down!’),
      ‘initial position’: Constraint.instance(‘start pos’),
      ‘drag position’: ‘initial position’.merge(‘constrained position’.when(‘mouse up!’)).integral(drag),
      ‘constrained position’✉: Constraint.instance(‘drag position’),
      output: shape.translateV(‘constrained position’)
    },
    Visualization📡: { 
      ‘u vec’🔩: ⟨5 -5 0⟩,
      ‘v vec’🔩: ⟨-5 -5 0⟩,
      ‘α angle’🔩: ‘u vec’.angle(‘v vec’, ☒),
      red: #FF5F44,
      green: #24D53E,
      yellow: #EFFF00,
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        label🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label shape’: label.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().div(2).rotate(3))),
        graphic: vector.filled(thickness).under(‘label gfx’).paintSolid(color),
        ‘result﹟67’: graphic.translateV(offset)
      },
      ‘u gfx’: Vector.instance(‘u vec’, 'u', red, Vector↳thickness, Vector↳offset).hitRegion('u', 0),
      ‘v gfx’: Vector.instance(‘v vec’, 'v', green, Vector↳thickness, Vector↳offset).hitRegion('v', 0),
      ‘text alignment’: 1.ite(‘text position’.hor().gt(0), (-1)),
      ‘text position’: ‘u vec’.normalize().mul(5).rotate(‘α angle’.div(2)),
      ‘α gfx’: '𝛼='.concat(‘α angle’.print(2)).filled(‘text alignment’, 0, 0).paintSolid(#FFEF00).translateV(‘text position’),
      ‘radius﹟124’: 8,
      arc: 🏭.figureArc(4, ⟨0 0 1⟩, ⟨1 0 0⟩.angle(‘u vec’, ☒), ⟨1 0 0⟩.angle(‘v vec’, ☒), ‘α angle’.gt(0), ☒).stroke(yellow, 1, ☑).under(‘α gfx’),
      ‘scene﹟152’: ‘u gfx’.under(‘v gfx’).under(arc)
    },
    ‘draggable u’: Draggable.instance(⟨5 0 1⟩, Draggable↳shape, ‘Circle Constraint’),
    ‘draggable v’: Draggable.instance(⟨0 -5 1⟩.rotate(animation), Draggable↳shape, ‘Circle Constraint’),
    u: ‘draggable u’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    v: ‘draggable v’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    α: u.«angle»(v, ☒),
    background: 𝕌.paintSolid(#000000).transparentize((0.5)),
    ‘scene﹟657’👁: Visualization.instance(u, v, Visualization↳‘α angle’).over(‘draggable u’).over(‘draggable v’).over(background)
  }
}
```




# Semantics