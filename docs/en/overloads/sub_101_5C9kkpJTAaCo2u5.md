# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
The __vector__ `-` operator (`minus` function) [lifted on signals](/refman/concepts/pure_functions)

[more about vectors...](/refman/concepts/vectors)

[related...](https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction)

# Example 1
- subtracting two vectors `a` and `b`, `c = a - b`

```vikid-script
𝕍i𝕂i𝔻 v0.7-796-gaeea7ce9 s23
{ 
  ‘⌂’: {* 
    a📡: ⟨5 0 0⟩,
    b📡: ⟨0 4 0⟩.rotate(🕒.mul((0.5))),
    c📡: a.«sub»(b),
    visualization👁: { 
      Vector: { 
        vector🔩: a,
        label🔩: 'a',
        color🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label gfx’: ■.scale(0.5).paintSolid(color).under(label.filled(0, 0, 0).paintSolid(#000000)),
        graphic: vector.filled(thickness).paintSolid(color).under(‘label gfx’.translateV(vector.div(2))),
        result: graphic.ite(offset.equ(⟨0 0 0⟩), graphic.over(graphic.translateV(offset)))
      },
      av: Vector.instance(a, 'a', #FF4C4C, Vector↳thickness, Vector↳offset),
      bv: Vector.instance(b, 'b', #26BF26, Vector↳thickness, Vector↳offset),
      ‘-bv’: Vector.instance(b.neg(), '-b', #26BF26, Vector↳thickness, Vector↳offset).translateV(a),
      cv: Vector.instance(c, 'c', #FFF500, Vector↳thickness, b),
      abc: 𝕌.paintSolid(#000000).under(bv).under(‘-bv’).under(cv).under(av)
    }
  }
}
```

# Example 2
- subtracting two points `p` and `q`, `v = p - q`

```vikid-script
𝕍i𝕂i𝔻 v0.7-796-gaeea7ce975f0 s23
{ 
  ‘⌂’: {* 
    p📡: ⟨0 0 1⟩,
    q📡: ⟨0 0 1⟩.add(⟨6 4 0⟩.mul(🕒.div(2).sin())),
    v📡: p.«sub»(q),
    visualization👁: { 
      Point: { 
        point🔩: ⟨0 0 1⟩,
        ‘label﹟23’🔩: 'p',
        scale🔩: 2,
        ‘color﹟179’🔩: #000000,
        radius: scale.div(5),
        ‘label gfx﹟32’: ‘label﹟23’.filled(1, (-1), 0).translateX(radius).translateV(point),
        ‘tmp65﹟65’: point.filled(scale).under(‘label gfx﹟32’).paintSolid(‘color﹟179’)
      },
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        ‘label﹟60’🔩: 'a',
        ‘color﹟62’🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label shape’: ‘label﹟60’.filled(0, 0, 0).paintSolid(#000000),
        ‘label gfx﹟68’: ■.transparentize((0.5)).scale((0.5)).scaleX(‘label shape’.boundingWidth().add((0.5))).paintSolid(‘color﹟62’).under(‘label shape’),
        graphic: vector.filled(thickness).paintSolid(‘color﹟62’).under(‘label gfx﹟68’.translateV(vector.div(2))),
        result: graphic.translateV(offset)
      },
      ‘p gfx’: Point.instance(p, 'p', Point↳scale, #26BF26),
      ‘q gfx’: Point.instance(q, 'q', Point↳scale, #FF4C4C),
      ‘v gfx’: Vector.instance(v, 'v=p-q', #FFEF00, Vector↳thickness, q),
      bg: 𝕌.paintSolid(#000000),
      scene: bg.under(‘p gfx’).under(‘q gfx’).under(‘v gfx’)
    }
  }
}
```


# Example 3
- subtracting a vectors `v` from a point `p`, `q = p - v`

```vikid-script
𝕍i𝕂i𝔻 v0.7-796-gaeea7ce975f0 s23
{ 
  ‘⌂’: {* 
    v📡: ⟨6 4 0⟩.mul(🕒.div(2).sin()),
    p📡: ⟨0 0 1⟩,
    q📡: p.«sub»(v),
    visualization👁: { 
      Point: { 
        point🔩: ⟨0 0 1⟩,
        ‘label﹟23’🔩: 'p',
        scale🔩: 2,
        ‘color﹟179’🔩: #000000,
        radius: scale.div(5),
        ‘label gfx﹟32’: ‘label﹟23’.filled(1, (-1), 0).translateX(radius).translateV(point),
        ‘tmp65﹟65’: point.filled(scale).under(‘label gfx﹟32’).paintSolid(‘color﹟179’)
      },
      Vector: { 
        vector🔩: ⟨4.25 0 0⟩,
        ‘label﹟60’🔩: 'a',
        ‘color﹟62’🔩: #FFFFFF,
        thickness🔩: 2,
        offset🔩: ⟨0 0 0⟩,
        ‘label gfx﹟68’: ■.scale((0.5)).paintSolid(‘color﹟62’).under(‘label﹟60’.filled(0, 0, 0).paintSolid(#000000)),
        graphic: vector.filled(thickness).paintSolid(‘color﹟62’).under(‘label gfx﹟68’.translateV(vector.div(2))),
        result: graphic.ite(offset.equ(⟨0 0 0⟩), graphic.over(graphic.translateV(offset)))
      },
      ‘p gfx’: Point.instance(p, 'p', Point↳scale, #26BF26),
      ‘q gfx’: Point.instance(q, 'q = p - v', Point↳scale, #FFF500),
      ‘v gfx’: Vector.instance(v, 'v', #FF4C4C, Vector↳thickness, p),
      ‘-v gfx’: Vector.instance(v.neg(), '-v', #FF4CC7, Vector↳thickness, p),
      bg: 𝕌.paintSolid(#000000),
      scene: bg.under(‘p gfx’).under(‘q gfx’).under(‘v gfx’).under(‘-v gfx’)
    }
  }
}
```

