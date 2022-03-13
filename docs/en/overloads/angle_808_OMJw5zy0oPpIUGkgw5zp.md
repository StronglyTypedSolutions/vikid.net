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
  
[see also...](/refman/concepts/angles)

[related...](https://en.wikipedia.org/wiki/Dot_product#Geometric_definition)

# Example 1
- The angle between the vectors `u` and `v`

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    u📡: ⟨5 0 0⟩,
    v📡: ⟨5 0 0⟩.rotate(🕒.div(2)),
    α📡: u.«angle»(v, ☒),
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
        result: graphic.translateV(offset)
      },
      ‘u gfx’: Vector.instance(u, 'u', #FF4832, Vector↳thickness, Vector↳offset),
      ‘v gfx’: Vector.instance(v, 'v', #19CB33, Vector↳thickness, Vector↳offset),
      ‘α gfx’: '𝛼='.concat(α.print(2)).filled(1, 0, 0).paintSolid(#FFEF00).translateV(⟨4.5 0 0⟩.rotate(α.div(2))),
      radius: 8,
      arc: 🏭.figureArc(4, ⟨0 0 1⟩, 0, α, α.gt(0), ☒).stroke(#FFEF00, 1, ☑).under(‘α gfx’),
      bg: 𝕌.paintSolid(#000000),
      scene: bg.under(‘u gfx’).under(‘v gfx’).under(arc)
    }
  }
}
```

# Example 2
- The angle between the vectors `u` and `v`
- Drag the blue handles to get a feel of how this function behaves

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5fb8ca s23
{ 
  ‘⌂’: {* 
    bg: 𝕌.paintSolid(#000000),
    ‘Circle Constraint’📡: { 
      ‘position﹟604’🔩: ⟨0 0 1⟩,
      ‘radius﹟621’: 5,
      ‘on circle’: ‘position﹟604’.sub(⟨0 0 1⟩).normalize().mul(‘radius﹟621’),
      ‘output﹟613’: ⟨0 0 1⟩.add(‘on circle’)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨3.75 3.25 1⟩,
      shape🔩: ●.scale((0.5)).paintSolid(#0057FF),
      Constraint🔩: { ‘position﹟348’🔩: ⟨0 0 1⟩ },
      ‘mouse pos﹟531’: 🏭.mousePosition(☒, ☑),
      ‘mouse down?﹟703’: 🏭.mouseButton(0, ☑),
      ‘mouse down!﹟545’: ‘mouse down?﹟703’.rising(),
      ‘mouse up!﹟695’: ‘mouse down?﹟703’.not().rising(),
      ‘drag﹟498’: ‘mouse pos﹟531’.derivative(‘in shape?’),
      ‘in shape?’: ‘output﹟341’.containsPoint(‘mouse pos﹟531’).when(‘mouse down!﹟545’),
      ‘initial position’: Constraint.instance(‘start pos’),
      ‘drag position’: ‘initial position’.merge(‘constrained position’.when(‘mouse up!﹟695’)).integral(‘drag﹟498’),
      ‘constrained position’✉: Constraint.instance(‘drag position’),
      ‘output﹟341’: shape.translateV(‘constrained position’)
    },
    Visualization📡: { 
      ‘u﹟253’🔩: ⟨5 -5 0⟩,
      ‘v﹟255’🔩: ⟨-5 -5 0⟩,
      ‘α﹟262’🔩: ‘u﹟253’.angle(‘v﹟255’, ☒),
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        label🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label shape’: label.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().div(2).rotate(3))),
        graphic: vector.filled(thickness).under(‘label gfx’).paintSolid(color),
        result: graphic.translateV(offset)
      },
      ‘u gfx’: Vector.instance(‘u﹟253’, 'u', #FF4832, Vector↳thickness, Vector↳offset).hitRegion('u', 0),
      ‘v gfx’: Vector.instance(‘v﹟255’, 'v', #19CB33, Vector↳thickness, Vector↳offset).hitRegion('v', 0),
      ‘text alignment’: 1.ite(‘text position’.hor().gt(0), (-1)),
      ‘text position’: ‘u﹟253’.normalize().mul(5).rotate(‘α﹟262’.div(2)),
      ‘α gfx’: '𝛼='.concat(‘α﹟262’.print(2)).filled(‘text alignment’, 0, 0).paintSolid(#FFEF00).translateV(‘text position’),
      ‘radius﹟124’: 8,
      arc: 🏭.figureArc(4, ⟨0 0 1⟩, ⟨1 0 0⟩.angle(‘u﹟253’, ☒), ⟨1 0 0⟩.angle(‘v﹟255’, ☒), ‘α﹟262’.gt(0), ☒).stroke(#FFEF00, 1, ☑).under(‘α gfx’),
      ‘scene﹟152’: ‘u gfx’.under(‘v gfx’).under(arc)
    },
    ‘draggable u’: Draggable.instance(⟨5 0 1⟩, Draggable↳shape, ‘Circle Constraint’),
    ‘draggable v’: Draggable.instance(⟨0 -5 1⟩, Draggable↳shape, ‘Circle Constraint’),
    ‘u﹟2’: ‘draggable u’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    ‘v﹟4’: ‘draggable v’.track(Draggable↳‘constrained position’).sub(⟨0 0 1⟩),
    ‘α﹟12’: ‘u﹟2’.«angle»(‘v﹟4’, ☒),
    ‘scene﹟657’👁: Visualization.instance(‘u﹟2’, ‘v﹟4’, Visualization↳‘α﹟262’).over(‘draggable u’).over(‘draggable v’).over(bg)
  }
}
```

# Semantics