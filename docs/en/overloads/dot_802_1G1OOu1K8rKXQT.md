# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- The `dot product` function [lifted on signals](/refman/concepts/pure_functions)
- The `dot product` is `zero` when the `input` and `param` are __orthogonal__.
- The `dot product` is commutative, so `a.dot(b) == b.dot(a)`,
- This is also equal to the `cosine` of the angle between the vectors multiplied by the `lengths` of the vectors

> Currently this function treats points `⟨x,y,w⟩` as vectors `⟨x,y,0⟩`, so it completely ignores the weight. _But this behavior can change, so you should only pass vectors_

[more about vectors...](/refman/concepts/vectors)

[related...](https://en.wikipedia.org/wiki/Dot_product)

# Example 1
- The dot product between two vectors `u` and `v`

> When you drag `u` to give it length one, notice that the `dot` project is the __signed length of the orthogonal projection__ of `v` on `u`. 

```vikid-script
𝕍i𝕂i𝔻 v0.7-804-g5ae79b5f s23
{ 
  ‘⌂’: {* 
    ‘animate?’📡: ☑.merge(☒.when(🏭.mouseButton(0, ☑).rising().take(1))),
    animation: 🕒.div(2).filter(‘animate?’),
    Snap: { 
      position🔩: ⟨0 0 1⟩,
      ‘grid steps’: 5,
      snapped: position.sub(⟨0 0 1⟩).mul(‘grid steps’).round().div(‘grid steps’).add(⟨0 0 1⟩),
      ‘result﹟666’: position.ite(‘animate?’, snapped)
    },
    Draggable📡: { 
      ‘start pos’🔩: ⟨0 0 1⟩,
      shape🔩: ●.scale((0.5)).paintSolid(#08ACFF).transparentize((0.5)),
      ‘label﹟598’🔩: 'p',
      Constraint🔩: { ‘﹟569’🔩: ⟨0 0 1⟩ },
      ‘text gfx’: ‘label﹟598’.filled(0, 0, 0).scale((0.625)),
      ‘mouse pos’: 🏭.mousePosition(☒, ☑),
      ‘mouse down?’: 🏭.mouseButton(0, ☑),
      ‘mouse down!’: ‘mouse down?’.rising(),
      ‘mouse up!’: ‘mouse down?’.not().rising(),
      drag: ‘mouse pos’.derivative(‘in shape?’.and(‘mouse down?’)),
      ‘in shape?’: output.containsPoint(‘mouse pos’).when(‘mouse down!’),
      ‘initial position’: Constraint.instance(‘start pos’),
      ‘drag position’: ‘initial position’.merge(‘constrained position’.when(‘mouse up!’)).integral(drag).calm(☒),
      ‘constrained position’✉: Constraint.instance(‘drag position’),
      output: shape.under(‘text gfx’).translateV(‘constrained position’)
    },
    ‘draggable p0’📡: Draggable.instance(⟨5 0 1⟩, Draggable↳shape, 'p0', Snap),
    ‘draggable p1’📡: Draggable.instance(⟨4 -3 1⟩.rotate(animation), Draggable↳shape, 'p1', Snap),
    p0: ‘draggable p0’.track(Draggable↳‘constrained position’),
    p1: ‘draggable p1’.track(Draggable↳‘constrained position’),
    u📡: p0.sub(⟨0 0 1⟩),
    v📡: p1.sub(⟨0 0 1⟩),
    dot📡: u.«dot»(v),
    visualization👁: { 
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        ‘label﹟60’🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label distance’🔩: (0.5),
        ‘label shape’: ‘label﹟60’.filled(0, 0, 0),
        ‘label gfx’: ‘label shape’.translateV(vector.div(2).add(vector.normalize().mul(‘label distance’).rotate(3))),
        graphic: vector.filled(thickness).under(‘label gfx’).paintSolid(color),
        ‘result﹟104’: graphic.translateV(offset)
      },
      red: #FF5F44,
      green: #24D53E,
      yellow: #EFFF00,
      blue: #00ADFF,
      ‘u gfx’: Vector.instance(u, 'u', red, Vector↳thickness, Vector↳offset, Vector↳‘label distance’),
      ‘v gfx’: Vector.instance(v, 'v', green, Vector↳thickness, Vector↳offset, Vector↳‘label distance’),
      ‘v ortho gfx’: Vector.instance(‘v ortho’, 'v⟂', blue, Vector↳thickness, Vector↳offset, 1),
      ‘v ortho’: v.rotate(3),
      bg: 𝕌.paintSolid(#000000).transparentize((0.5)),
      ‘par shape’: 🏭.drawingPath(⟨0 0 1⟩).lineTo(u.add(⟨0 0 1⟩)).lineTo(‘v ortho’.add(u).add(⟨0 0 1⟩)).lineTo(⟨0 0 1⟩.add(‘v ortho’)),
      ‘dot text’: 'dot=
'.concat(dot.print(2)).filled(0, 0, 0).paintSolid(#000000).translateV(u.add(‘v ortho’).div(2)),
      ‘dot gfx’: ‘par shape’.filled(yellow),
      scene: bg.under(‘dot gfx’).under(‘draggable p0’).under(‘draggable p1’).under(‘u gfx’).under(‘v ortho gfx’).under(‘v gfx’).under(‘dot text’)
    }
  }
}
```

# Semantics