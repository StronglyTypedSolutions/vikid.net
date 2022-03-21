# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
- If the `input` updates, copy it to the `output`
- If the `param` updates, copy it to the `output`
- If __both update at the same time__, copy the `input` to the `output`
  
> Hence the name `mergeLeft`, since `input` is the _left_ parameter of this operator

[related...](http://reactivex.io/documentation/operators/merge.html)

# Marble diagram

Reactive behavior is often easier to understand using [marble diagrams](https://medium.com/@jshvarts/read-marble-diagrams-like-a-pro-3d72934d3ef5):
- we use __timelines__ for the `input` (_top_ `#00B2FF:●`), `param` (_middle_ `#FF9E4A:■`) and `output` signals (_bottom_ `#00B2FF #FF9E4A:●■`)
- time increases from __left to right__
- each __marble__ on the timeline indicates an __update__
- each __column__ represents a __timestamp__
- the number in the __marble__ is the __timestamp__ of the __update__
- click on the `$enterFullscreen` button for a full view of the diagram.

> Notice that when `input` and `param` __both update at the same time__ (_e.g. a marble exists in the same column_), the `merge` operator will pick the `input` marble `#00B2FF:●`

```vikid-script
𝕍i𝕂i𝔻 v0.7-811-gbaff6cf4 s23
{ 
  ‘⌂’: {* 
    ‘marble diagram’👁: «{ 
      frequency📡: 2,
      period📡: 1.div(frequency),
      rate📡: radius.mul(2).mul(period),
      radius📡: (0.5),
      ‘Marble Diagram’: { 
        sampler📡: 🕒.mul(frequency).floor().calm(☒).getStamp(),
        timestamp📡: 1.merge(timestamp.add(1).when(sampler)),
        Sampler📡: { 
          ‘input﹟9’🔩: 🕒.dynFrom(),
          ‘interactive?﹟662’🔩: ☒,
          samplee: ‘input﹟9’.getStamp(),
          ‘sample?’: samplee.gt(sampler🐢.mergeLeft(0)).ite(‘interactive?﹟662’, sampler.equ(samplee)),
          ‘output﹟11’: ‘input﹟9’.when(sampler).filter(‘sample?’)
        },
        Marbelizer📡: { 
          ‘input﹟253’🔩: 🕒.dynFrom(),
          ‘shape﹟849’🔩: ●,
          ‘color﹟301’🔩✉: #FF8F00,
          ‘interactive?﹟674’🔩: ☒,
          ‘sample﹟259’: Sampler.instance(‘input﹟253’, ‘interactive?﹟674’),
          ‘text﹟829’: timestamp.print(0).filled(0, 0, 0).paintSolid(#000000),
          ‘scene﹟320’: ‘shape﹟849’.paintSolid(‘color﹟301’).under(‘text﹟829’).scale(radius.mul((0.875))).when(‘sample﹟259’)
        },
        Marbles: { 
          ‘input﹟24’🔩📡: Marbelizer.instance(🕒.dynFrom(), Marbelizer↳‘shape﹟849’, Marbelizer↳‘color﹟301’, Marbelizer↳‘interactive?﹟674’),
          y🔩: 0,
          time📡: 🕒,
          Marble: { 
            ‘sample﹟49’: ‘input﹟24’.take(1),
            index: 🏭.index(0),
            x: time.take(1).div(rate).sub(9).add(radius),
            ‘shape﹟55’: ‘sample﹟49’.translateX(x)
          },
          ‘bar﹟438’: ■.scaleV(⟨9 0.4 1⟩).paintSolid(‘input﹟24’.track(Marbelizer↳‘color﹟301’)).transparentize((0.875)),
          ‘scene﹟75’: Marble.population(0, 1.when(‘input﹟24’), ☑).under().merge(Ø).over(‘bar﹟438’).translateY(y)
        },
        ‘pulse signal 1’📡: { 
          ‘time toggle﹟233’: 🕒.mod(2).gte(1),
          ‘time pulse﹟135’: 🕒.filter(‘time toggle﹟233’),
          ‘color﹟742’✉: #00B2FF,
          ‘output﹟357’: Marbelizer.instance(‘time pulse﹟135’.dynFrom(), Marbelizer↳‘shape﹟849’, ‘color﹟742’, Marbelizer↳‘interactive?﹟674’)
        },
        ‘pulse signal 2’📡: { 
          ‘color﹟744’✉: #FF9E4A,
          ‘time toggle﹟755’: 🕒.mod(3).gte((1.5)),
          ‘time pulse﹟765’: 🕒.filter(‘time toggle﹟755’),
          ‘output﹟769’: Marbelizer.instance(‘time pulse﹟765’.dynFrom(), ■, ‘color﹟744’, Marbelizer↳‘interactive?﹟674’)
        },
        ‘combined signal﹟747’: { 
          ‘color﹟750’✉: #FFFFFF,
          ‘combined signal﹟145’: ‘pulse signal 1’.mergeLeft(‘pulse signal 2’)
        },
        ‘pulse marbles 1’: Marbles.instance(‘pulse signal 1’, 4),
        ‘pulse marbles 2’: Marbles.instance(‘pulse signal 2’, 0),
        ‘combined marbles’: Marbles.instance(‘combined signal﹟747’, (-4)),
        ‘text﹟725’: { 
          operator: 'mergeLeft'.filled(0, 0, 0).translateY(2),
          arrow: ⟨0 -1.5 0⟩.filled(2).translateY((-1.25)),
          ‘text﹟689’: operator.under(arrow)
        },
        ‘background﹟482’📡: { 
          ‘bar﹟414’: ■.scaleY(6).scaleX(radius).translateX(9.sub(radius)),
          bars: ‘bar﹟414’.clone(8.div(radius), ⟨1 0 0 1 0 0⟩.translateX(radius.mul((-4)))),
          ‘background﹟520’: bars.paintSolid(#4D4D4D).translateX(radius.mul((-2))).under(bars.paintSolid(#333333))
        },
        ‘alive?’🏃: 🕒.lt(9),
        ‘scene﹟394’: ‘pulse marbles 1’.under(‘pulse marbles 2’).under(‘combined marbles’).over(‘background﹟482’).under(‘text﹟725’)
      },
      ‘scene﹟812’: ‘Marble Diagram’.simulator(☑, (0.01))
    }»
  }
}
```





# Semantics

```pseudo
input.mergeLeft(param).at(T) := Vo@To
  where
    Vi@Ti   := input.at(T)
    Vp@Tp   := param.at(T)
    Vo@To   := Vi @ Ti if Ti > 0 and Ti ≥ Tp else 
               Vp @ Tp if Tp > 0 else 
                ⊥ @ 0
```
