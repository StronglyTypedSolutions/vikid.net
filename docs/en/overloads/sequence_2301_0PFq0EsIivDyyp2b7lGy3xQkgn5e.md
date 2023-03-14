# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
Sequences two side-effects.

If both effects are _ready_, runs the left effect before the right effect.

Otherwise, the effect that is _ready_ is run first.

> Each side-effect resolves only once, like a Javascript promise.

# Example
```vikid-script
𝕍i𝕂i𝔻 v1.0-1095-gcd89bae1 s27
{ 
  ‘⌂’: {* 
    ‘click!’: 🏭.mouseButton(0, ☑).rising(),
    ‘name prompt’: 'What is your name?'.prompt(«'Foobar'», ‘click!’),
    ‘name result’: ‘name prompt’.result(0),
    ‘hello alert’: 'Hello '.concat(‘name result’).alert(‘name result’),
    ‘side effects’🗲: ‘name prompt’.sequence(‘hello alert’),
    ‘click to start’: 'Side effects demo

Asks the user's name,
then says hello.

Click to (re)start'.filled(0, 0, 0)
  }
}
```


# Semantics