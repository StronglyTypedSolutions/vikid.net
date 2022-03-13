# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- The `determinant` function [lifted on signals](/refman/concepts/pure_functions)
- Computes the __signed area of the parallellogram__ spanned by the `input` and `param` vectors.
- The sign is __negative__ when the __shortest rotation__ from the `input` to the `param` vector is `clockwise`.
  - More generally, the sign is __positive__ when this is in the __same direction__ as rotating the `X-axis` to the `Y-axis`.
     - This is counter-clockwise in ViKiD and math, but is clockwise in most 2D computer graphics software.
- The `determinant` is `zero` when the `input` and `param` are __parallel__.
- The `determinant` is __anti-commutative__, so `a.det(b) == -b.dot(a)`,
- This is also equal to the `sine` of the angle between the vectors multiplied by the `lengths` of the vectors

> Currently this function treats points `⟨x,y,w⟩` as vectors `⟨x,y,0⟩`, so it completely ignores the weight. _But this behavior can change, so you should only pass vectors_

[more about vectors...](/refman/concepts/vectors)

[related...](https://en.wikipedia.org/wiki/Determinant#2_%C3%97_2_matrices)

# Example 1
- The `determinant` between the vectors `u` and `v`

> Drag the blue points to get a feel of the function.

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    ‘animate?’📡: ☑.merge(☒.when(🏭.mouseButton(0, ☑).rising().take(1))),
    animation: 🕒.div(2).filter(‘animate?’),
    Snap: { 
      ‘position﹟660’🔩: ⟨0 0 1⟩,
      ‘grid steps’: 5,
      snapped: ‘position﹟660’.sub(⟨0 0 1⟩).mul(‘grid steps’).round().div(‘grid steps’).add(⟨0 0 1⟩),
      ‘result﹟680’: ‘position﹟660’.ite(‘animate?’, snapped)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨0 0 1⟩,
      shape🔩: ●.scale((0.5)).paintSolid(#08ACFF).transparentize((0.5)),
      Constraint🔩: { ‘position﹟569’🔩: ⟨0 0 1⟩ },
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
    ‘draggable u’📡: Draggable.instance(⟨5 0 1⟩, Draggable↳shape, Snap),
    ‘draggable v’📡: Draggable.instance(⟨0 -5 1⟩.rotate(animation), Draggable↳shape, Snap),
    u📡: ‘draggable u’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    v📡: ‘draggable v’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    det📡: u.«det»(v),
    visualization👁: { 
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        label🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label shape’: label.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().div(2).rotate(3))),
        graphic: vector.filled(thickness).under(‘label gfx’).paintSolid(color),
        ‘result﹟104’: graphic.translateV(offset)
      },
      red: #FF5F44,
      green: #24D53E,
      yellow: #EFFF00,
      ‘u gfx’: Vector.instance(u, 'u', red, Vector↳thickness, Vector↳offset),
      ‘v gfx’: Vector.instance(v, 'v', green, Vector↳thickness, Vector↳offset),
      parallellogram: 🏭.drawingPath(⟨0 0 1⟩).lineTo(u.add(⟨0 0 1⟩)).lineTo(v.add(u).add(⟨0 0 1⟩)).lineTo(⟨0 0 1⟩.add(v)),
      ‘det gfx’: parallellogram.filled(yellow).under('det=
'.concat(det.print(2)).filled(0, 0, 0).paintSolid(#000000).translateV(u.add(v).div(2))),
      background: 𝕌.paintSolid(#000000).transparentize((0.5)),
      scene: ‘det gfx’.under(‘draggable u’).under(‘draggable v’).under(‘u gfx’).under(‘v gfx’).over(background)
    }
  }
}
```

# Example 2
- Using the determinant to compute the __signed distance__ from a point `q` to a line through `p1` and `p2`

> Note that dragging `q` parallel to the line __does not change the value of the determinant__!

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    Snap: { 
      ‘﹟660’🔩: ⟨0 0 1⟩,
      ‘grid steps’: 5,
      snapped: ‘﹟660’.sub(⟨0 0 1⟩).mul(‘grid steps’).round().div(‘grid steps’).add(⟨0 0 1⟩)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨0 0 1⟩,
      shape🔩: ●.scale((0.5)).paintSolid(#08ACFF).transparentize((0.5)),
      ‘label﹟352’🔩: 'p',
      Constraint🔩: { ‘﹟569’🔩: ⟨0 0 1⟩ },
      ‘text gfx’: ‘label﹟352’.filled(0, 0, 0).scale((0.625)),
      ‘mouse pos’: 🏭.mousePosition(☒, ☑),
      ‘mouse down?’: 🏭.mouseButton(0, ☑),
      ‘mouse down!’: ‘mouse down?’.rising(),
      ‘mouse up!’: ‘mouse down?’.not().rising(),
      drag: ‘mouse pos’.derivative(‘in shape?’),
      ‘in shape?’: output.containsPoint(‘mouse pos’).when(‘mouse down!’),
      ‘initial position’: Constraint.instance(‘start pos’),
      ‘drag position’: ‘initial position’.merge(‘constrained position’.when(‘mouse up!’)).integral(drag),
      ‘constrained position’✉: Constraint.instance(‘drag position’),
      output: shape.under(‘text gfx’).translateV(‘constrained position’)
    },
    ‘draggable p0’📡: Draggable.instance(⟨5 3 1⟩, Draggable↳shape, 'p0', Snap),
    ‘draggable p1’📡: Draggable.instance(⟨-5 3 1⟩, Draggable↳shape, 'p1', Snap),
    ‘draggable q’📡: Draggable.instance(⟨0 -4 1⟩, Draggable↳shape, 'q', Snap),
    p0📡: ‘draggable p0’.track(Draggable↳‘constrained position’),
    p1📡: ‘draggable p1’.track(Draggable↳‘constrained position’),
    q📡: ‘draggable q’.track(Draggable↳‘constrained position’),
    ‘û’📡: p1.sub(p0).normalize(),
    v📡: q.sub(p0),
    det📡: ‘û’.«det»(v),
    visualization👁: { 
      Vector📡: { 
        vector🔩: ⟨4.25 0 0⟩,
        ‘label﹟478’🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        angle🔩: 3,
        offset🔩: ⟨0 0 0⟩,
        ‘label shape’: ‘label﹟478’.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().div(2).rotate(angle))),
        graphic: vector.filled(thickness).under(‘label gfx’).paintSolid(color),
        result: graphic.translateV(offset)
      },
      line: 🏭.figureLine(p0.add(‘û’.mul((-100))), p1.add(‘û’.mul(100))).stroke(#CA602D, (0.5), ☑),
      red: #FF5F44,
      green: #24D53E,
      yellow: #EFFF00,
      ‘u gfx’: Vector.instance(‘û’, 'û', green, 1, Vector↳angle, p0),
      ‘v gfx’: Vector.instance(v, 'v', red, 1, (-3), p0),
      parallellogram: 🏭.drawingPath(p0).lineTo(q).lineTo(q.add(‘û’)).lineTo(p0.add(‘û’)),
      ‘det gfx’: parallellogram.filled(yellow).transparentize((0.5)).under('det=
'.concat(det.print(2)).filled((-1), 0, 0).paintSolid(yellow).translateV(p0.add(q).add(⟨-2 0 0⟩))),
      background: 𝕌.paintSolid(#000000).transparentize((0.5)),
      scene: background.under(line).under(‘det gfx’).under(‘draggable p0’).under(‘draggable p1’).under(‘draggable q’).under(‘u gfx’).under(‘v gfx’)
    }
  }
}
```

# Example 3
- Using the ratio of two determinants to find the intersection between two lines
- More generally known as [Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

> Note that shifting the parallellogram (using the yellow handle) __does not change its area__. Shift it to align it with the brown parallellogram. The __ratio between the two parallellograms__ can be used to __linearly interpolate__ from `p1` to `p0` to find the intersection point.

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    Snap: { 
      ‘﹟660’🔩: ⟨0 0 1⟩,
      ‘grid steps’: 5,
      snapped: ‘﹟660’.sub(⟨0 0 1⟩).mul(‘grid steps’).round().div(‘grid steps’).add(⟨0 0 1⟩)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨0 0 1⟩,
      ‘shape﹟58’🔩: ●.scale((0.5)).paintSolid(#08ACFF).transparentize((0.5)),
      ‘label﹟352’🔩: 'p',
      ‘Constraint﹟69’🔩: { ‘﹟569’🔩: ⟨0 0 1⟩ },
      ‘text gfx’: ‘label﹟352’.filled(0, 0, 0).scale((0.625)),
      ‘mouse pos’: 🏭.mousePosition(☒, ☑),
      ‘mouse down?’: 🏭.mouseButton(0, ☑),
      ‘mouse down!’: ‘mouse down?’.rising(),
      ‘mouse up!’: ‘mouse down?’.not().rising(),
      ‘drag﹟95’: ‘mouse pos’.derivative(‘in shape?’.and(‘mouse down?’)),
      ‘in shape?’: output.containsPoint(‘mouse pos’).when(‘mouse down!’),
      ‘initial position’: ‘Constraint﹟69’.instance(‘start pos’),
      ‘drag position’: ‘initial position’.merge(‘constrained position’.when(‘mouse up!’)).integral(‘drag﹟95’).calm(☒),
      ‘constrained position’✉: ‘Constraint﹟69’.instance(‘drag position’),
      output: ‘shape﹟58’.under(‘text gfx’).translateV(‘constrained position’)
    },
    ‘draggable p0’📡: Draggable.instance(⟨-1 -5 1⟩, Draggable↳‘shape﹟58’, 'p0', Snap),
    ‘draggable p1’📡: Draggable.instance(⟨1 1 1⟩, Draggable↳‘shape﹟58’, 'p1', Snap),
    ‘draggable q0’📡: Draggable.instance(⟨-5 -5 1⟩, Draggable↳‘shape﹟58’, 'q0', Snap),
    ‘draggable q1’📡: Draggable.instance(⟨3 -3 1⟩, Draggable↳‘shape﹟58’, 'q1', Snap),
    p0📡: ‘draggable p0’.track(Draggable↳‘constrained position’),
    p1📡: ‘draggable p1’.track(Draggable↳‘constrained position’),
    q0📡: ‘draggable q0’.track(Draggable↳‘constrained position’),
    q1📡: ‘draggable q1’.track(Draggable↳‘constrained position’),
    ‘p0 → p1’📡: p1.sub(p0),
    ‘q1-q0’📡: q1.sub(q0),
    ‘p1-q0’: p1.sub(q0),
    ‘det 1’: ‘p1-q0’.det(‘q1-q0’),
    ‘det 2’: ‘p0 → p1’.det(‘q1-q0’),
    ratio: ‘det 1’.div(‘det 2’),
    intersection📡: p1.lerp(p0, «ratio»),
    visualization👁: { 
      Line: { 
        ‘point 0﹟680’🔩: ⟨0 0 1⟩,
        ‘point 1﹟681’🔩: ⟨3.75 -2.75 1⟩,
        ‘color﹟697’🔩: #CA602D,
        ‘offset﹟684’: ‘point 1﹟681’.sub(‘point 0﹟680’).normalize().mul(100),
        ‘thickness﹟699’: (0.5),
        ‘result﹟654’: 🏭.figureLine(‘point 0﹟680’.add(‘offset﹟684’), ‘point 1﹟681’.sub(‘offset﹟684’)).stroke(‘color﹟697’, ‘thickness﹟699’, ☑)
      },
      Parallelogram: { 
        ‘point 0﹟729’🔩📡: ⟨-5 5 1⟩,
        ‘point 1﹟732’🔩: ⟨2 3 1⟩,
        ‘point 2’🔩: ⟨-3 -3 1⟩,
        ‘color﹟737’🔩: #FFF600,
        ‘draggable?’🔩: ☒,
        ‘delta 01’📡: ‘point 1﹟732’.sub(‘point 0﹟729’),
        ‘delta 02’📡: ‘point 2’.sub(‘point 0﹟729’),
        ‘point 3’: ‘point 2’.add(‘delta 01’),
        center: ‘point 0﹟729’.add(‘point 1﹟732’).add(‘point 2’).add(‘point 3’).cartesian(),
        ‘Constraint﹟862’: { 
          ‘point﹟822’🔩: ⟨0.5 -1.75 1⟩,
          frame: 🏭.matrix2d(‘delta 01’, ‘delta 02’, ‘point 0﹟729’),
          ‘local point’: ‘point﹟822’.transform(frame.invert()),
          ‘local x’: ‘local point’.hor(),
          ‘local y’: ‘local point’.ver(),
          ‘cons local point’: 🏭.point2d(‘local x’, (0.5)),
          ‘cons point’: ‘cons local point’.transform(frame)
        },
        ‘drag﹟791’: Draggable.instance(center, ●.paintSolid(‘color﹟737’).scale((0.25)), '', ‘Constraint﹟862’),
        shift: ‘drag﹟791’.track(Draggable↳‘constrained position’).sub(center).ite(‘draggable?’, ⟨0 0 0⟩),
        ‘shape﹟739’: 🏭.drawingPath(‘point 0﹟729’).lineTo(‘point 1﹟732’).lineTo(‘point 3’.add(shift)).lineTo(‘point 2’.add(shift)).filled(‘color﹟737’).transparentize((0.5)).under(‘drag﹟791’.ite(‘draggable?’, Ø))
      },
      Vector📡: { 
        vector🔩: ⟨4.25 0 0⟩,
        ‘label﹟478’🔩: 'a',
        ‘color﹟466’🔩: #FFFFFF,
        ‘thickness﹟500’🔩: 2,
        angle🔩: 3,
        ‘offset﹟462’🔩: ⟨0 0 0⟩,
        ‘label shape’: ‘label﹟478’.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().div(2).rotate(angle))),
        graphic: vector.filled(‘thickness﹟500’).under(‘label gfx’).paintSolid(‘color﹟466’),
        ‘result﹟459’: graphic.translateV(‘offset﹟462’)
      },
      brown: #CA602D,
      red: #FF5F44,
      green: #24D53E,
      yellow: #EFFF00,
      ‘line 1’: Line.instance(p0, p1, green),
      ‘line 2’: Line.instance(q0, q1, red),
      ‘par 1’: Parallelogram.instance(q0, q1, p1, yellow, ☑),
      ‘par 2’: Parallelogram.instance(q0, q1, q0.add(‘p0 → p1’), brown, Parallelogram↳‘draggable?’),
      ‘point﹟953’: intersection.filled(2).transparentize((0.5)),
      background: 𝕌.paintSolid(#000000).transparentize((0.5)),
      scene: background.under(‘par 2’).under(‘par 1’).under(‘line 1’).under(‘line 2’).under(‘draggable p0’).under(‘draggable p1’).under(‘draggable q0’).under(‘draggable q1’).under(‘point﹟953’)
    }
  }
}
```




# Semantics